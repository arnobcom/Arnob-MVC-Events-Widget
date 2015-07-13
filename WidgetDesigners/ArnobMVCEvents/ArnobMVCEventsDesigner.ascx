<%@ Control %>
<%@ Register Assembly="Telerik.Sitefinity" TagPrefix="sf" Namespace="Telerik.Sitefinity.Web.UI" %>
<%@ Register Assembly="Telerik.Sitefinity" TagPrefix="sitefinity" Namespace="Telerik.Sitefinity.Web.UI" %>
<%@ Register Assembly="Telerik.Sitefinity" TagPrefix="sfFields" Namespace="Telerik.Sitefinity.Web.UI.Fields" %>

<sitefinity:ResourceLinks ID="resourcesLinks" runat="server">
    <sitefinity:ResourceFile Name="Styles/Ajax.css" />
    <sitefinity:ResourceFile Name="Styles/jQuery/jquery.ui.core.css" />
    <sitefinity:ResourceFile Name="Styles/jQuery/jquery.ui.dialog.css" />
    <sitefinity:ResourceFile Name="Styles/jQuery/jquery.ui.theme.sitefinity.css" />
</sitefinity:ResourceLinks>
<div id="designerLayoutRoot" class="sfContentViews sfSingleContentView" style="max-height: 400px; overflow: auto; ">
<ol>        
    <li class="sfFormCtrl">
    <div id="ListSelector">
        <sitefinity:FlatSelector ID="ListItemSelector" runat="server" ItemType="Telerik.Sitefinity.Events.Model.Event"
                DataKeyNames="Id" ShowSelectedFilter="false" AllowPaging="false" PageSize="10"
                AllowSearching="true" ShowProvidersList="true" InclueAllProvidersOption="false"
                SearchBoxTitleText="Filter by Title" ShowHeader="true"
                ServiceUrl="~/Sitefinity/Services/Content/EventService.svc/?managerType=&providerName=&itemType=Telerik.Sitefinity.Events.Model.Event&provider=&sortExpression=LastModified%20DESC&skip=0&take=50">
            <DataMembers>
                <sitefinity:DataMemberInfo ID="DataMemberInfoList" runat="server" Name="Title" IsExtendedSearchField="true" HeaderText="Title">
                    <span>{{Title}}</span>
                </sitefinity:DataMemberInfo>
            </DataMembers>
        </sitefinity:FlatSelector>
        <asp:Panel runat="server" ID="buttonAreaPanelList" class="sfButtonArea sfSelectorBtns">
            <asp:LinkButton ID="lnkDoneList" runat="server" OnClientClick="return false;" CssClass="sfLinkBtn sfSave">
                <strong class="sfLinkBtnIn">
                    <asp:Literal ID="Literal1" runat="server" Text="<%$Resources:Labels, Done %>" />
                </strong>
            </asp:LinkButton>
            <asp:Literal ID="Literal2" runat="server" Text="<%$Resources:Labels, or%>" />
            <asp:LinkButton ID="lnkCancelList" runat="server" CssClass="sfCancel" OnClientClick="return false;">
                <asp:Literal ID="Literal3" runat="server" Text="<%$Resources:Labels, Cancel %>" />
            </asp:LinkButton>
        </asp:Panel>
    </div>
    <label class="sfTxtLbl" for="selectedListLabel"></label>
    <span class="sfSelectedItem" id="selectedListLabel">
        <asp:Literal ID="Literal4" runat="server" Text="" />
    </span>
    <asp:LinkButton ID="selectButtonList" OnClientClick="return false;" runat="server" CssClass="sfLinkBtn sfChange">
        <span class="sfLinkBtnIn">
            <asp:Literal ID="Literal5" runat="server" Text="<%$Resources:Labels, SelectDotDotDot %>" />
        </span>
    </asp:LinkButton>
    <asp:LinkButton ID="deselectButtonList" OnClientClick="return false;" runat="server" CssClass="sfLinkBtn sfChange">
      <span class="sfLinkBtnIn">
        <asp:Literal ID="Literal6" runat="server" Text="<%$Resources:Labels, Remove %>" />
      </span>
    </asp:LinkButton>
    <div class="sfExample">Select the Event</div>
    </li>
    
</ol>
</div>
