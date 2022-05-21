#Variables
$SiteURL = "https://xx.sharepoint.com/sites/zforms"
$listName ="Workflow Tasks"

 
#Get All List Items
$ListItems = Get-PnPListItem -List $ListName -Fields "Title","Created","ID","GUID" -PageSize 2000
 
#Set Cutoff Date - Past 730 days - 18 May 2020- last 2 years
$CutoffDate = (Get-Date).AddDays(-730)
Write-Host "cutoff date: " $CutoffDate 
 

ForEach($Item in $ListItems)
{
    #Get the Created Date of the Item
    $CreatedDate = $Item["Created"]
 
    If($CreatedDate -le $CutoffDate)
    {
        Remove-PnPListItem -List $ListName -Identity $Item.Id -Force -Recycle
        Write-Host "Deleted List Item:"$Item.Id
    }
}

