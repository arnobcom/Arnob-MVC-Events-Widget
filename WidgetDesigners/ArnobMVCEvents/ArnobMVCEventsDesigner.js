Type.registerNamespace("SitefinityWebApp.WidgetDesigners.ArnobMVCEvents");

SitefinityWebApp.WidgetDesigners.ArnobMVCEvents.ArnobMVCEventsDesigner = function (element) {
    /* Initialize List fields */
    this._selectButtonList = null;
    this._selectButtonListClickDelegate = null;
    this._deselectButtonList = null;
    this._deselectButtonListClickDelegate = null;
    this._lnkDoneList = null;
    this._lnkCancelList = null;
    this._selectListDialog = null;
    this._ListItemSelector = null;
    this._ListSelectedKeys = null;
    this._ListSelectedItems = null;
    this._ListBinderBound = false;
    this._doneSelectingListDelegate = null;
    this._cancelListDelegate = null;
    this._ListItemSelectorCloseDelegate = null;
    
    /* Calls the base constructor */
    SitefinityWebApp.WidgetDesigners.ArnobMVCEvents.ArnobMVCEventsDesigner.initializeBase(this, [element]);
}

SitefinityWebApp.WidgetDesigners.ArnobMVCEvents.ArnobMVCEventsDesigner.prototype = {
    /* --------------------------------- set up and tear down --------------------------------- */
    initialize: function () {
        /* Here you can attach to events or do other initialization */
        SitefinityWebApp.WidgetDesigners.ArnobMVCEvents.ArnobMVCEventsDesigner.callBaseMethod(this, 'initialize');

        /* Initialize List */
        if (this._selectButtonList) {
            this._selectButtonListClickDelegate = Function.createDelegate(this, this._selectButtonListClicked);
            $addHandler(this._selectButtonList, "click", this._selectButtonListClickDelegate);
        }
        
        if (this._deselectButtonList) {
            this._deselectButtonListClickDelegate = Function.createDelegate(this, this._deselectButtonListClicked);
            $addHandler(this._deselectButtonList, "click", this._deselectButtonListClickDelegate);
        }

        if (this._lnkDoneList) {
            this._ListDoneSelectingDelegate = Function.createDelegate(this, this._ListDoneSelecting);
            $addHandler(this._lnkDoneList, "click", this._ListDoneSelectingDelegate);
        }

        if (this._lnkCancelList) {
            this._ListCancelDelegate = Function.createDelegate(this, this._ListItemSelectorCloseHandler);
            $addHandler(this._lnkCancelList, "click", this._ListCancelDelegate);
        }

        this._selectListDialog = jQuery("#ListSelector").dialog({
            autoOpen: false,
            modal: false,
            width: 540,
            height: "auto",
            closeOnEscape: true,
            resizable: false,
            draggable: false,
            zIndex: 5000,
        });
    },
    dispose: function () {
        /* this is the place to unbind/dispose the event handlers created in the initialize method */
        SitefinityWebApp.WidgetDesigners.ArnobMVCEvents.ArnobMVCEventsDesigner.callBaseMethod(this, 'dispose');

        /* Dispose List */
        
    },

    /* --------------------------------- public methods ---------------------------------- */

    findElement: function (id) {
        var result = jQuery(this.get_element()).find("#" + id).get(0);
        return result;
    },

    /* Called when the designer window gets opened and here is place to "bind" your designer to the control properties */
    refreshUI: function () {
        var controlData = this._propertyEditor.get_control().Settings; /* JavaScript clone of your control - all the control properties will be properties of the controlData too */

        /* RefreshUI List */
        this.get_selectedList().innerHTML = controlData.List;
        if (controlData.List && controlData.List != "00000000-0000-0000-0000-000000000000") {
            this.get_selectButtonList().innerHTML = '<span class=\"sfLinkBtnIn\">Change</span>';
            $(this.get_deselectButtonList()).show()
        }
        else {
            $(this.get_deselectButtonList()).hide()
        }
    },

    /* Called when the "Save" button is clicked. Here you can transfer the settings from the designer to the control */
    applyChanges: function () {
        var controlData = this._propertyEditor.get_control().Settings;

        /* ApplyChanges List */
        controlData.List = this.get_selectedList().innerHTML;
    },

    /* --------------------------------- event handlers ---------------------------------- */

    /* List event handlers */


    /* --------------------------------- private methods --------------------------------- */

    /* List private methods */
    _selectButtonListClicked: function (sender, args) {
        var itemSelector = this.get_ListItemSelector();
        if (itemSelector) {
            // dynamic items don't support fallback, the binder search should work as in monolingual 
            itemSelector._selectorSearchBox.get_binderSearch()._multilingual = false;
            itemSelector.dataBind();
        }

        this._selectListDialog.dialog("open");
        jQuery("#designerLayoutRoot").hide();
        this._selectListDialog.dialog().parent().css("min-width", "525px");
        dialogBase.resizeToContent();
        return false;
    },
    
    _deselectButtonListClicked: function (sender, args) {
        this.get_selectedList().innerHTML = "00000000-0000-0000-0000-000000000000";
        this.get_selectButtonList().innerHTML = '<span class=\"sfLinkBtnIn\">Select...</span>';
        $(this.get_deselectButtonList()).hide()
        return false;
    },

    _ListItemSelectorCloseHandler: function (sender, args) {
        this._selectListDialog.dialog("close");
        jQuery("#designerLayoutRoot").show();
        dialogBase.resizeToContent();
    },

    _ListDoneSelecting: function (sender, args) {
        var selectedItem = this.get_ListSelectedItems()[0];
        if (selectedItem != null) {
            this.get_selectedList().innerHTML = selectedItem.Id;
            this.get_selectButtonList().innerHTML = '<span class=\"sfLinkBtnIn\">Change</span>';
            $(this.get_deselectButtonList()).show()
        }
        this._selectListDialog.dialog("close");
        jQuery("#designerLayoutRoot").show();
        dialogBase.resizeToContent();
    },

    /* --------------------------------- properties -------------------------------------- */

    /* List properties */
    get_selectButtonList: function () {
        return this._selectButtonList;
    },
    set_selectButtonList: function (value) {
        this._selectButtonList = value;
    },
    
    get_deselectButtonList: function () {
        return this._deselectButtonList;
    },
    set_deselectButtonList: function (value) {
        this._deselectButtonList = value;
    },

    get_ListItemSelector: function () {
        return this._ListItemSelector;
    },
    set_ListItemSelector: function (value) {
        this._ListItemSelector = value;
    },

    get_ListBinder: function () {
        return this._ListItemSelector.get_binder();
    },

    get_ListSelectedKeys: function () {
        return this._ListItemSelector.get_selectedKeys();
    },
    set_ListSelectedKeys: function (keys) {
        this._selectedKeys = keys;
    },

    get_ListSelectedItems: function () {
        return this._ListItemSelector.getSelectedItems();
    },
    set_ListSelectedItems: function (items) {
        this._ListSelectedItems = items;
        if (this._ListBinderBound) {
            this._ListItemSelector.bindSelector();
        }
    },

    get_lnkDoneList: function () {
        return this._lnkDoneList;
    },
    set_lnkDoneList: function (value) {
        this._lnkDoneList = value;
    },
    get_lnkCancelList: function () {
        return this._lnkCancelList;
    },
    set_lnkCancelList: function (value) {
        this._lnkCancelList = value;
    },
    get_selectedList: function () {
        if (this._selectedListLabel == null) {
            this._selectedListLabel = jQuery(this.get_element()).find('#selectedListLabel').get(0);
        }
        return this._selectedListLabel;
    }
}

SitefinityWebApp.WidgetDesigners.ArnobMVCEvents.ArnobMVCEventsDesigner.registerClass('SitefinityWebApp.WidgetDesigners.ArnobMVCEvents.ArnobMVCEventsDesigner', Telerik.Sitefinity.Web.UI.ControlDesign.ControlDesignerBase);
