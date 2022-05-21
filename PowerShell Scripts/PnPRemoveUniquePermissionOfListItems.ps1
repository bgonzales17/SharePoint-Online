#Parameters
$SiteURL = "https://xx.sharepoint.com/sites/zforms"
$FolderServerRelativeURL = "/sites/Marketing/Branding/2018"
 
#Connect to the site
Connect-PnPOnline -Url $SiteURL -Interactive
 
#Get the Folder from given URL
$Folder = Get-PnPFolder -Url $FolderServerRelativeURL -Includes ListItemAllFields.ParentList
$ParentList = $Folder.ListItemAllFields.ParentList.Title
 
#Get All Files from the Folder
$Files = Get-PnPListItem -List $ParentList -FolderServerRelativeUrl $Folder.ServerRelativeUrl | Where {$_.FileSystemObjectType -eq "File"}
 
#Traverse through each file in the folder
ForEach ($File in $Files)
{
    #Check If File has Unique Permissions
    $HasUniquePermissions = Get-PnPProperty -ClientObject $File -Property HasUniqueRoleAssignments
    If($HasUniquePermissions)
    {
        #Reset Broken Inheritance
        $File.ResetRoleInheritance()
        $File.update()
        Invoke-PnPQuery
        Write-Host "Reset Unique Permissions on File $($File.FieldValues["FileRef"])" -ForegroundColor Green
    }
}


