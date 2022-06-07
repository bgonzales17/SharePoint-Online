#This PnP PowerShell script removes unique permissions from all the folders and files for a given SharePoint list/ library
#Parameters
$SiteURL = "https://abc.sharepoint.com/sites/forms1"
$ListName = "TestDocLibrary"
#$ListName = "Documents"


Write-Host $SiteURL
Write-Host $FolderServerRelativeURL 
#Connect to the site
Connect-PnPOnline -Url $SiteURL -Interactive
 
#Get all list items in batches
$ListItems = Get-PnPListItem -List $ListName -PageSize 500
 
#Iterate through each list item
ForEach($ListItem in $ListItems)
{
    #Check if the Item has unique permissions
    $HasUniquePermissions = Get-PnPProperty -ClientObject $ListItem -Property "HasUniqueRoleAssignments"
    If($HasUniquePermissions)
    {       
        $Msg = "Deleting Unique Permissions on {0} '{1}' at {2} " -f $ListItem.FileSystemObjectType,$ListItem.FieldValues["FileLeafRef"],$ListItem.FieldValues["FileRef"]
        Write-host $Msg
        #Delete unique permissions on the list item
        Set-PnPListItemPermission -List $ListName -Identity $ListItem.ID -InheritPermissions
    }
}

