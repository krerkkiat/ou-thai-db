# ou-thai-db

## About

This is the sample web application that allows the Thai script to be used in the search term. It also configured with a proper analyzer for the field that contains Thai words in Thai script.

The original website seems to lack this functionality thus it leaves user with only the romanized script as a search term which can be hard use. To illustrate the lack of support for Thai script as a search term, you can fill in the following pharse into the title box at the original site then hit search button `นิธิ`. While the original site returns the no result found page. This web application returns resonable results for `นิธิ`. In fact any another search term that is in Thai script can be used on the original site, but the web site always returns the no result page.

This current version of the application is just a prototype. Its database contains non of the data from the original website. However, the full database of the original website can be re-indexed. This  will then enable user to search the database using the Thai script.

The data is index to [Elasticsearch](https://www.elastic.co/products/elasticsearch) backend with a proper analyzer for Thai language. This Elasticsearch backend then provides the search functionaly for this web application.

## About the David K. Wyatt Southeast Asia Collection & Thai Database
Please see [here](https://cicdatabank.library.ohiou.edu/opac/thai_about.php) for the information about the database.
