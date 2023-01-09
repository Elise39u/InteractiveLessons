# Installing The API Backend
Im gonna teach you how you can install the backend API in case you wanna use it.   
Make sure you have .NET 6.0 and C# 10.0 installed at first   
## Step 1 donwloading the project   
OFcourse your first step is to download the project and extract it somewhere   
After that you can start it up to see if there are any errors   
## Step 2 Clearing Build Project   
If the project succesfully opens then your first step is to clear anything up from others.   
Visual studio likes to hide dump files which can causes issues   
We can get rid of this by doning in the bar at the top   
Build on the toolbar --> Clean solutions   
After this succees then agian Build on the toolbar --> Rebuild Soulution   
If this succeess you can go to step 3    
## Step 3 Nuget packges 
As last thing we need to do is restoring anymissing nuget packages   
We do this by right clicking the (Tools | NuGet | NuGet Restore) in the Rider application   
On Visual studio we do `nuget restore, dotnet restore, msbuild -t:restore, or through Visual Studio. The dotnet build and dotnet run`   
If this succees then you can build then project and it should work 
