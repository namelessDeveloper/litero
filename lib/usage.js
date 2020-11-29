module.exports = `
Litero
====== 
 
Download stories from Literotica.com and save them locally as readable HTML web pages or beautifully formatted Text files, for later reading. 
 
Usage 
----- 
litero_getstory saves the files to whatever directory it is executed.

	litero_getstory --url "https://www.literotica.com/s/how-to-write-for-literotica" 
 
Required Argument 
----------------- 
 
	-u or --url Pass the URL(link) to the story 
 
	litero_getstory --url "https://www.literotica.com/s/how-to-write-for-literotica" 
 
 
Optional arguments: 
------------------- 
	-h or --help Display Help and usage  
 
		e.g. litero_getstory --help 
 
	-f or --filename Custom filename for the story to be saved  
 
		e.g. litero_getstory -u "https://www.literotica.com/s/how-to-write-for-literotica" -f "favorite_story" 
 
	-e or --format Format of the saved file - Can be html or txt (default)  
 
		e.g. litero_getstory -u "https://www.literotica.com/s/how-to-write-for-literotica" -e html 
 
	--verbose - Output all of those annoying messages. 
	
		e.g. litero_getstory --verbose -u https://www.literotica.com/s/how-to-write-for-literotica`
