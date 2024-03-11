-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- Link to schema: https://app.quickdatabasediagrams.com/#/d/eZp3vD
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


SET XACT_ABORT ON

BEGIN TRANSACTION QUICKDBD

-- Physical
CREATE TABLE [Death_Rates] (
    [country] VARCHAR(40)  NOT NULL ,
    [code] VARCHAR(3)  NOT NULL ,
    [year] INT  NOT NULL ,
    [drought_deaths] DOUBLE  NOT NULL ,
    [flood_deaths] DOUBLE  NOT NULL ,
    [earthquake_deaths] DOUBLE  NOT NULL ,
    [extreme_weather_deaths] DOUBLE  NOT NULL ,
    [extreme_temp_deaths] DOUBLE  NOT NULL ,
    [other_deatjs] DOUBLE  NOT NULL 
)

CREATE TABLE [World_Long_Lat] (
    [country] VARCHAR(40)  NOT NULL ,
    [country_code] VARCHAR(4)  NOT NULL ,
    [latitude] DOUBLE  NOT NULL ,
    [longitude] DOUBLE  NOT NULL ,
    CONSTRAINT [PK_World_Long_Lat] PRIMARY KEY CLUSTERED (
        [country] ASC
    )
)

ALTER TABLE [Death_Rates] WITH CHECK ADD CONSTRAINT [FK_Death_Rates_country] FOREIGN KEY([country])
REFERENCES [World_Long_Lat] ([country])

ALTER TABLE [Death_Rates] CHECK CONSTRAINT [FK_Death_Rates_country]

COMMIT TRANSACTION QUICKDBD