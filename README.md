# Global_Natural_Disasters
## Kyle Kohlmeyer, Eileen Fey, and Bridget Groble
## Overview
For our project, we looked at natural disasters worldwide by disaster types and deaths in each country, as a rate of deaths per 100,000 people. Natural disasters are increasingly affecting the global population. Natural disasters are costly to countries with the U.S. spending over $100 billion dollars on natural disasters in 2023. Globally, these costs exceed $2.65 trillion across all countries. Natural disasters are also becoming more frequent and more extreme. For example, over the last 10 years, the U.S. has seen more billion-dollar natural disasters than ever before.
Finally, these disasters are affecting more and more people. While death rates have decreased since the early 20th century due to modern technology mitigating drought and flood deaths, deaths from other natural disasters have been increasing since around 1965. We thought it would be intellectually stimulating to create a visualization that demonstrated these changes over time.
## Interacting with the Project
When the user navigates to the live html, they have two options for how to view the map. First, they can look at natural disaster deaths by type of natural disaster. On this page, there is a drop down menu for the user to select from disaster type to see all deaths for that disaster type over the last 123 years. Secondly, the user can navigate to natural disaster deaths per year and interact with a year slider to see the total deaths in a given year due to natural disasters. The radius of the dot on both pages gets bigger for the more deaths there are. The map also features hover text, giving the country name, its coordinates, and the number of deaths on the respective page.

## Ethical Considerations
The selected dataset records the deaths of people, so it is imperative to consider the ethical considerations for our topic. The data does not compromise an individual’s right to privacy because there is no personally identifying information of any of the victims within the data. It's also important to consider that our dataset may have some biases because it looks at death rates in every country. It is very unlikely that every country has the same ability to report on every death caused by a natural disaster accurately. It would also be most ideal if this information could be used to promote sustainability practices and recovery efforts in order to reach those who are affected by natural disasters. 

## Project Considerations and Limitations
While over the last 123 years, natural disaster deaths have decreased the main categories deaths decreased in were droughts and floods. Meanwhile, other natural disaster types have seen an increase in deaths. Additionally, since 1965, natural disaster deaths have been increasing. One limitation of presenting data through a visualization is that a visualization can be  as extreme as you style it to be. For example, we could have manipulated the sizes of the dots and the vectors by which we magnified them at will. We were consistent, but every platform might not be. Through the data cleaning, we also learned that it’s important to always ask questions of your data and ask “does this look/sound right?”

## Data Cleaning: 
Only the types of disasters with the largest impact were kept. Some of the disasters that had a lesser impact had their rates summed and were grouped into an "Other_Deaths" column. Data for countries that no longer exist was removed from the natural disaster data. The names of countries in the natural disaster data was edited to be consistent with the country names found in the coordinate data (IE, standardizing accent marks on country names, how the Democratic Republic of the Congo and Republic of Congo were differentiated, ect). Coordinate data for South Sudan was manually added to the coordinate data for each country due to it not being included because it is a young country. A total death rate per 100000 people column was added to the natural disaster data by summing the rates for each disaster. 

## SQL: 
Table schema was developed for both the coordinate information for each country and the natural disaster data. An entity relationship diagram was created using https://www.quickdatabasediagrams.com/  and can be found in the data folder that shows the relationships between the two tables. The schema was imported into SQL, cleaned up, and both tables were successfully imported into PostgreSQL. The tables were inner-joined on the country name to produce a natural disaster dataset containing longitude and latitude. Country code was unable to be used to join the tables due to formatting differences (two-letter vs three-letter codes). 

## Future Research Questions
This project sparked several ideas for future research. One key question is “How many people each year are affected by natural disasters?” Then, this leads to the next question, which is how do you define “affected?” A future visualization could show the number or rate of people that were injured, or became homeless, for example. You could also ask “Which geographic areas have seen an increase in natural disasters?” Finally, to measure the impact of climate change, a question could be “How do natural disasters relate to [fill in the blank]?” Fill in the blank could be increased temperature, increased rainfall, or the amount of greenhouse gases being emitted.

## References for the Data Sources
EM-DAT, CRED / UCLouvain (2023) – processed by Our World in Data. “People affected by natural disasters” [dataset]. EM-DAT, CRED / 
UCLouvain, “Natural disasters” [original data]. Retrieved March 3, 2024 from https://ourworldindata.org/grapher/total-affected-by-natural-disasters.

## Other References

EM-DAT, CRED / UCLouvain (2023); Population based on various sources (2023) – with major processing by Our World in Data. 
“Droughts” [dataset]. EM-DAT, CRED / UCLouvain, “Natural disasters”; Various sources, “Population” [original https://ourworldindata.org/grapher/death-rates-from-natural-disasters?time=1942..latest.

Ferreira Costa, Carlos. (2020). Revisiting disasters in Cabo Verde: A Historical Review of Droughts and Food Insecurity Events to Enable 
Future Climate Resilience. 55. 47-76. 

Gusner, Penny. Forbes Advisor, Forbes Media LLC, 7 June 2023, https://www.ncei.noaa.gov/access/billions/. Accessed 2 March 2024.

Jacobo, Julia, and Daniel Manzo. ABC News, ABC News Network, 28 Dec. 2021,
abcnews.go.com/US/year-climate-extreme-weather-events-prove-climate-change/story?id=81771045. Accessed 2 March 2024.

NASA. Satellite Image of Hurricane. 2020. 
https://www.boatus.com/expert-advice/expert-advice-archive/2020/september/how-not-to-read-a-hurricane-map. 

NOAA National Centers for Environmental Information (NCEI) U.S. Billion-Dollar Weather and Climate Disasters (2024). 
https://www.ncei.noaa.gov/access/billions/. Accessed 2 March 2024.

## Coding References

https://stackoverflow.com/questions/62646569/leaflet-map-markers-clearlayers-before-new-position-data
This article was referenced in order to utilize the clearlayers function so that the page refreshes each time the user selects a disaster type or moves the year slider.  
