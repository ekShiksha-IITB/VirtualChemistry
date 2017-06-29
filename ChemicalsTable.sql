CREATE SCHEMA VCLchemicals;
USE VCLchemicals;
DROP TABLE chemicals;
CREATE TABLE chemicals
(
name varchar(150) PRIMARY KEY,
nature varchar(20),
chemFormula varchar(20) NOT NULL,
color varchar(20) DEFAULT 'colorless',
state varchar(20),
odour varchar(20) DEFAULT 'colorless' ,
nfactor int(11) DEFAULT 0,
density decimal(10,4),
molarMass decimal(10,4),
colorInWater varchar(20) DEFAULT 'colorless'
);
DESC chemicals;
SELECT * FROM chemicals;

INSERT INTO chemicals(name,nature,chemFormula,color,state,odour,nfactor,density,molarMass,colorInWater)
VALUES('Oxalic Acid','Acid','H2C2O4','white','solid','odorless',2,1.90,126,'colorless');

INSERT INTO chemicals(name,nature,chemFormula,color,state,odour,nfactor,density,molarMass,colorInWater)
VALUES('Ferric Chloride','Neutral and Others','FeCl3','light brown','solid','slightly HCl',0,2.90,162,'light brownish');

INSERT INTO chemicals(name,nature,chemFormula,color,state,odour,nfactor,density,molarMass,colorInWater)
VALUES('Potassium thiocynate','Neutral and Others','KSCN','colorless','solid','odorless',0,1.89,97,'colorless');

INSERT INTO chemicals(name,nature,chemFormula,color,state,odour,nfactor,density,molarMass,colorInWater)
VALUES('Sodium Hydroxide','Base','NaOH','white','solid','odorless',1,2.13,40,'colorless');

INSERT INTO chemicals(name,nature,chemFormula,color,state,odour,nfactor,density,molarMass,colorInWater)
VALUES('Sodium Carbonate','Neutral and Others','Na2CO3','white','solid','odorless',0,2.54,106,'colorless');

INSERT INTO chemicals(name,nature,chemFormula,color,state,odour,nfactor,density,molarMass,colorInWater)
VALUES('Hydrochloric Acid','Acid','HCl','colorless','liquid','odorless',1,0,36.5,'colorless');

INSERT INTO chemicals(name,nature,chemFormula,color,state,odour,nfactor,density,molarMass,colorInWater)
VALUES('Pottasium permanganate','Neutral and Others','KMnO4','purple','solid','odorless',5,2.703,158,'magneta-rose');

INSERT INTO chemicals(name,nature,chemFormula,color,state,odour,nfactor,density,molarMass,colorInWater)
VALUES('Ferrous ammonium sulphate','Neutral and Others','(NH4)2FeSO4.6H20','blue-green','solid','odorless',0,1.86,392,'blue-green');

INSERT INTO chemicals(name,nature,chemFormula,color,state,odour,nfactor,density,molarMass,colorInWater)
VALUES('Acetone','Neutral and Others','C3H6O','colorless','liquid','pungent',0,0.7845,58,'colorless');

INSERT INTO chemicals(name,nature,chemFormula,color,state,odour,nfactor,density,molarMass,colorInWater)
VALUES('Cobalt Chloride','Neutral and Others','CoCl2','blue','solid','odorless',0,3.336,130,'light blue');

INSERT INTO chemicals(name,nature,chemFormula,color,state,odour,nfactor,density,molarMass,colorInWater)
VALUES('Carbon tetrachloride','Neutral and Others','CCl4','colorless','liquid','ether like',0,1.5867,154,'colorless');

INSERT INTO chemicals(name,nature,chemFormula,color,state,odour,nfactor,density,molarMass,colorInWater)
VALUES('Bromine water','Neutral and Others','Br2andH20','intense yellow','liquid','suffocating',0,0,160,'intense yellow');

INSERT INTO chemicals(name,nature,chemFormula,color,state,odour,nfactor,density,molarMass,colorInWater)
VALUES('Cerric ammonium nitrate','Neutral and Others','H8N8CeO18','orange red','solid','odorless',0,0,548,'yellow');

INSERT INTO chemicals(name,nature,chemFormula,color,state,odour,nfactor,density,molarMass,colorInWater)
VALUES('Pottasium Iodide','Neutral and Others','KI','brown','liquid','odorless',0,0,166,'brownish');

INSERT INTO chemicals(name,nature,chemFormula,color,state,odour,nfactor,density,molarMass,colorInWater)
VALUES('Sodium hypochlorite','Neutral and Others','NaOCl','greenish yellow','solid','sweetish',0,1.11,74.5,'greenish yellow');

INSERT INTO chemicals(name,nature,chemFormula,color,state,odour,nfactor,density,molarMass,colorInWater)
VALUES('Sulphuric Acid','Acid','H2SO4','colorless','liquid','odorless',2,1.84,98,'colorless');

INSERT INTO chemicals(name,nature,chemFormula,color,state,odour,nfactor,density,molarMass,colorInWater)
VALUES('Perchloric Acid','Acid','HClO4','colorless','liquid','odorless',1,1.768,100.5,'colorless');

INSERT INTO chemicals(name,nature,chemFormula,color,state,odour,nfactor,density,molarMass,colorInWater)
VALUES('Nirtic Acid','Acid','HNO3','colorless/yellow','liquid','acridic',1,1.5129,63,'colorless');

INSERT INTO chemicals(name,nature,chemFormula,color,state,odour,nfactor,density,molarMass,colorInWater)
VALUES('Hydrobromic Acid','Acid','HBr','colorless/yellow','liquid','acridic',1,1.49,81,'faint-yellow');

INSERT INTO chemicals(name,nature,chemFormula,color,state,odour,nfactor,density,molarMass,colorInWater)
VALUES('Hydroiodic Acid','Acid','HI','colorless','gas','acridic',1,2.85,128,'colorless');

INSERT INTO chemicals(name,nature,chemFormula,color,state,odour,nfactor,density,molarMass,colorInWater)
VALUES('Pottasium Hydroxide','Base','KOH','white','solid','odorless',1,2.12,56,'colorless');

INSERT INTO chemicals(name,nature,chemFormula,color,state,odour,nfactor,density,molarMass,colorInWater)
VALUES('Lithium Hydroxide','Base','LiOH','white','solid','odorless',1,1.46,24,'colorless');

INSERT INTO chemicals(name,nature,chemFormula,color,state,odour,nfactor,density,molarMass,colorInWater)
VALUES('Sodium oxalate','Neutral and Others','Na2C2O4','white','solid','odorless',0,2.34,134,'colorless');

INSERT INTO chemicals(name,nature,chemFormula,color,state,odour,nfactor,density,molarMass,colorInWater)
VALUES('Sodium chloride','Neutral and Others','NaCl','colorless','solid','odorless',0,2.165,58.5,'colorless');

INSERT INTO chemicals(name,nature,chemFormula,color,state,odour,nfactor,density,molarMass,colorInWater)
VALUES('Water','Neutral and Others','H20','colorless','liquid','odorless',0,1.0,18,'colorless');

INSERT INTO chemicals(name,nature,chemFormula,color,state,odour,nfactor,density,molarMass,colorInWater)
VALUES('Carbondioxide','Neutral and Others','CO2','colorless','gas','odorless',0,1.977,44,'colorless');

INSERT INTO chemicals(name,nature,chemFormula,color,state,odour,nfactor,density,molarMass,colorInWater)
VALUES('Pottasium sulphate','Neutral and Others','K2SO4','white','solid','odorless',0,2.66,174,'colorless');

INSERT INTO chemicals(name,nature,chemFormula,color,state,odour,nfactor,density,molarMass,colorInWater)
VALUES('Manganese sulphate ','Neutral and Others','MnSO4','white','solid','odorless',0,3.25,151,'pale pink');































