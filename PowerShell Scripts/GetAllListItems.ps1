#Load SharePoint CSOM Assemblies
Add-Type -Path "C:\Program Files\Common Files\Microsoft Shared\Web Server Extensions\16\ISAPI\Microsoft.SharePoint.Client.dll"
Add-Type -Path "C:\Program Files\Common Files\Microsoft Shared\Web Server Extensions\16\ISAPI\Microsoft.SharePoint.Client.Runtime.dll"
  
#Variables for Processing
$SiteURL = "https://xx.sharepoint.com/sites/zforms"
$ListName="HR Forms"

$UserName="sanjay@gmail.com"
$Password ="testpwd"
 
#Setup Credentials to connect
$Credentials = New-Object Microsoft.SharePoint.Client.SharePointOnlineCredentials($UserName,(ConvertTo-SecureString $Password -AsPlainText -Force))
 
#Set up the context
$Context = New-Object Microsoft.SharePoint.Client.ClientContext($SiteUrl) 
$Context.Credentials = $credentials
  
#Get the List
$List = $Context.web.Lists.GetByTitle($ListName)

#sharepoint online get list items powershell
$ListItems = $List.GetItems([Microsoft.SharePoint.Client.CamlQuery]::CreateAllItemsQuery()) 
$Context.Load($ListItems)
$Context.ExecuteQuery()       

write-host "Total Number of List Items found:"$ListItems.Count

#Loop through each item
$ListItems | ForEach-Object {
    #Get the Title field value
    write-host $_["Title"]
}  

