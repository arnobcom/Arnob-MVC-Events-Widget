using System;
using System.Linq;
using System.Web.UI;
using Telerik.Sitefinity.Web.UI;
using Telerik.Sitefinity.Web.UI.ControlDesign;
using System.Collections.Generic;
using System.Web.UI.WebControls;
using System.Web;
using Telerik.Sitefinity.Localization;
using Telerik.Sitefinity.Modules.Pages;

namespace SitefinityWebApp.WidgetDesigners.ArnobMVCEvents
{
    /// <summary>
    /// Represents a designer for the <typeparamref name="SitefinityWebApp.Mvc.Controllers.ArnobMVCEventsController"/> widget
    /// </summary>
    public class ArnobMVCEventsDesigner : ControlDesignerBase
    {
        #region Properties
        /// <summary>
        /// Obsolete. Use LayoutTemplatePath instead.
        /// </summary>
        protected override string LayoutTemplateName
        {
            get
            {
                return string.Empty;
            }
        }

        /// <summary>
        /// Gets the layout template's relative or virtual path.
        /// </summary>
        public override string LayoutTemplatePath
        {
            get
            {
                if (string.IsNullOrEmpty(base.LayoutTemplatePath))
                    return ArnobMVCEventsDesigner.layoutTemplatePath;
                return base.LayoutTemplatePath;
            }
            set
            {
                base.LayoutTemplatePath = value;
            }
        }

        protected override HtmlTextWriterTag TagKey
        {
            get
            {
                return HtmlTextWriterTag.Div;
            }
        }
        #endregion

        #region Control references
        /// <summary>
        /// The LinkButton for selecting List
        /// </summary>
        protected internal virtual LinkButton SelectButtonList
        {
            get
            {
                return this.Container.GetControl<LinkButton>("selectButtonList", false);
            }
        }

        /// <summary>
        /// The LinkButton for deselecting List
        /// </summary>
        protected internal virtual LinkButton DeselectButtonList
        {
            get
            {
                return this.Container.GetControl<LinkButton>("deselectButtonList", false);
            }
        }

        /// <summary>
        /// The Flat Selector for List
        /// </summary>
        protected internal virtual FlatSelector ListItemSelector
        {
            get
            {
                return this.Container.GetControl<FlatSelector>("ListItemSelector", false);
            }
        }

        /// <summary>
        /// The LinkButton for "Done"
        /// </summary>
        protected virtual LinkButton DoneButtonList
        {
            get
            {
                return this.Container.GetControl<LinkButton>("lnkDoneList", true);
            }
        }

        /// <summary>
        /// The LinkButton for "Cancel"
        /// </summary>
        protected virtual LinkButton CancelButtonList
        {
            get
            {
                return this.Container.GetControl<LinkButton>("lnkCancelList", true);
            }
        }

        /// <summary>
        /// The button area control
        /// </summary>
        protected virtual Control ButtonAreaList
        {
            get
            {
                return this.Container.GetControl<Control>("buttonAreaPanelList", false);
            }
        }

        #endregion

        #region Methods
        protected override void InitializeControls(Telerik.Sitefinity.Web.UI.GenericContainer container)
        {
            // Place your initialization logic here

            if (this.PropertyEditor != null)
            {
                var uiCulture = this.PropertyEditor.PropertyValuesCulture;
                this.ListItemSelector.UICulture = uiCulture;
                
            }
        }
        #endregion

        #region IScriptControl implementation
        /// <summary>
        /// Gets a collection of script descriptors that represent ECMAScript (JavaScript) client components.
        /// </summary>
        public override System.Collections.Generic.IEnumerable<System.Web.UI.ScriptDescriptor> GetScriptDescriptors()
        {
            var scriptDescriptors = new List<ScriptDescriptor>(base.GetScriptDescriptors());
            var descriptor = (ScriptControlDescriptor)scriptDescriptors.Last();

            descriptor.AddElementProperty("selectButtonList", this.SelectButtonList.ClientID);
            descriptor.AddElementProperty("deselectButtonList", this.DeselectButtonList.ClientID);
            descriptor.AddComponentProperty("ListItemSelector", this.ListItemSelector.ClientID);
            descriptor.AddElementProperty("lnkDoneList", this.DoneButtonList.ClientID);
            descriptor.AddElementProperty("lnkCancelList", this.CancelButtonList.ClientID);

            return scriptDescriptors;
        }

        /// <summary>
        /// Gets a collection of ScriptReference objects that define script resources that the control requires.
        /// </summary>
        public override System.Collections.Generic.IEnumerable<System.Web.UI.ScriptReference> GetScriptReferences()
        {
            var scripts = new List<ScriptReference>(base.GetScriptReferences());
            scripts.Add(new ScriptReference(ArnobMVCEventsDesigner.scriptReference));
            return scripts;
        }

        /// <summary>
        /// Gets the required by the control, core library scripts predefined in the <see cref="ScriptRef"/> enum.
        /// </summary>
        protected override ScriptRef GetRequiredCoreScripts()
        {
            return ScriptRef.JQuery | ScriptRef.JQueryUI;
        }
        #endregion

        #region Private members & constants
        public static readonly string layoutTemplatePath = "~/WidgetDesigners/ArnobMVCEvents/ArnobMVCEventsDesigner.ascx";
        public const string scriptReference = "~/WidgetDesigners/ArnobMVCEvents/ArnobMVCEventsDesigner.js";
        #endregion
    }
}
 
