CREATE SCHEMA VCLchemandreaction;
USE VCLchemandreaction;
DROP TABLE chemicals;
CREATE TABLE chemicals
(
name varchar(150) PRIMARY KEY NOT NULL,
nature varchar(20) NOT NULL,
chemFormula varchar(20) NOT NULL,
color varchar(20) DEFAULT 'transparent' NOT NULL,
state varchar(20) NOT NULL,
odour varchar(20) DEFAULT 'transparent' NOT NULL ,
nfactor int(11) DEFAULT 0 NOT NULL,
density decimal(10,4) NOT NULL,
molarMass decimal(10,4) NOT NULL,
colorInWater varchar(20) DEFAULT 'transparent' NOT NULL
);
DESC chemicals;
SELECT * FROM chemicals;

INSERT INTO chemicals(name,nature,chemFormula,color,state,odour,nfactor,density,molarMass,colorInWater)
VALUES('Oxalic Acid','Acid','H2C2O4','#FBFCFC','solid','odorless',2,1.90,126,'transparent');

INSERT INTO chemicals(name,nature,chemFormula,color,state,odour,nfactor,density,molarMass,colorInWater)
VALUES('Ferric Chloride','Neutral','FeCl3','#DC7633','solid','slightly HCl',0,2.90,162,'#DC7633');

INSERT INTO chemicals(name,nature,chemFormula,color,state,odour,nfactor,density,molarMass,colorInWater)
VALUES('Potassium thiocynate','Neutral','KSCN','transparent','solid','odorless',0,1.89,97,'transparent');

INSERT INTO chemicals(name,nature,chemFormula,color,state,odour,nfactor,density,molarMass,colorInWater)
VALUES('Sodium Hydroxide','Base','NaOH','#FBFCFC','solid','odorless',1,2.13,40,'transparent');

INSERT INTO chemicals(name,nature,chemFormula,color,state,odour,nfactor,density,molarMass,colorInWater)
VALUES('Sodium Carbonate','Neutral','Na2CO3','#FBFCFC','solid','odorless',0,2.54,106,'transparent');

INSERT INTO chemicals(name,nature,chemFormula,color,state,odour,nfactor,density,molarMass,colorInWater)
VALUES('Hydrochloric Acid','Acid','HCl','transparent','liquid','odorless',1,0.0015,36.5,'transparent');

INSERT INTO chemicals(name,nature,chemFormula,color,state,odour,nfactor,density,molarMass,colorInWater)
VALUES('Pottasium permanganate','Neutral','KMnO4','#A569BD','solid','odorless',5,2.703,158,'#e600ac');

INSERT INTO chemicals(name,nature,chemFormula,color,state,odour,nfactor,density,molarMass,colorInWater)
VALUES('Ferrous ammonium sulphate','Neutral','(NH4)2FeSO4.6H20','#00ffbf','solid','odorless',0,1.86,392,'#00ffbf');

INSERT INTO chemicals(name,nature,chemFormula,color,state,odour,nfactor,density,molarMass,colorInWater)
VALUES('Acetone','Neutral','C3H6O','transparent','liquid','pungent',0,0.7845,58,'transparent');

INSERT INTO chemicals(name,nature,chemFormula,color,state,odour,nfactor,density,molarMass,colorInWater)
VALUES('Cobalt Chloride','Neutral','CoCl2','#0052cc','solid','odorless',0,3.336,130,'#3385ff');

INSERT INTO chemicals(name,nature,chemFormula,color,state,odour,nfactor,density,molarMass,colorInWater)
VALUES('Carbon tetrachloride','Neutral','CCl4','transparent','liquid','ether like',0,1.5867,154,'transparent');

INSERT INTO chemicals(name,nature,chemFormula,color,state,odour,nfactor,density,molarMass,colorInWater)
VALUES('Bromine water','Neutral','Br2andH20','#802b00','liquid','suffocating',0,3.119,160,'#802b00');

INSERT INTO chemicals(name,nature,chemFormula,color,state,odour,nfactor,density,molarMass,colorInWater)
VALUES('Cerric ammonium nitrate','Neutral','H8N8CeO18','#ff3300','solid','odorless',0,1.10,548,'#ff8000');


INSERT INTO chemicals(name,nature,chemFormula,color,state,odour,nfactor,density,molarMass,colorInWater)
VALUES('Pottasium Iodide','Neutral','KI','#e64d00','liquid','odorless',0,3.12,166,'#e64d00');

INSERT INTO chemicals(name,nature,chemFormula,color,state,odour,nfactor,density,molarMass,colorInWater)
VALUES('Sodium hypochlorite','Neutral','NaOCl','#bfff00','solid','sweetish',0,1.11,74.5,'#bfff00');

INSERT INTO chemicals(name,nature,chemFormula,color,state,odour,nfactor,density,molarMass,colorInWater)
VALUES('Sulphuric Acid','Acid','H2SO4','transparent','liquid','odorless',2,1.84,98,'transparent');

INSERT INTO chemicals(name,nature,chemFormula,color,state,odour,nfactor,density,molarMass,colorInWater)
VALUES('Perchloric Acid','Acid','HClO4','transparent','liquid','odorless',1,1.768,100.5,'transparent');

INSERT INTO chemicals(name,nature,chemFormula,color,state,odour,nfactor,density,molarMass,colorInWater)
VALUES('Nirtic Acid','Acid','HNO3','transparent','liquid','acridic',1,1.5129,63,'transparent');

INSERT INTO chemicals(name,nature,chemFormula,color,state,odour,nfactor,density,molarMass,colorInWater)
VALUES('Hydrobromic Acid','Acid','HBr','#ffff99','liquid','acridic',1,1.49,81,'#ffff99');

INSERT INTO chemicals(name,nature,chemFormula,color,state,odour,nfactor,density,molarMass,colorInWater)
VALUES('Hydroiodic Acid','Acid','HI','transparent','gas','acridic',1,2.85,128,'transparent');

INSERT INTO chemicals(name,nature,chemFormula,color,state,odour,nfactor,density,molarMass,colorInWater)
VALUES('Pottasium Hydroxide','Base','KOH','#FBFCFC','solid','odorless',1,2.12,56,'transparent');

INSERT INTO chemicals(name,nature,chemFormula,color,state,odour,nfactor,density,molarMass,colorInWater)
VALUES('Lithium Hydroxide','Base','LiOH','#FBFCFC','solid','odorless',1,1.46,24,'transparent');

INSERT INTO chemicals(name,nature,chemFormula,color,state,odour,nfactor,density,molarMass,colorInWater)
VALUES('Sodium oxalate','Neutral','Na2C2O4','#FBFCFC','solid','odorless',0,2.34,134,'transparent');

INSERT INTO chemicals(name,nature,chemFormula,color,state,odour,nfactor,density,molarMass,colorInWater)
VALUES('Sodium chloride','Neutral','NaCl','transparent','solid','odorless',0,2.165,58.5,'transparent');

INSERT INTO chemicals(name,nature,chemFormula,color,state,odour,nfactor,density,molarMass,colorInWater)
VALUES('Water','Neutral','H20','transparent','liquid','odorless',0,1.0,18,'transparent');

INSERT INTO chemicals(name,nature,chemFormula,color,state,odour,nfactor,density,molarMass,colorInWater)
VALUES('Carbondioxide','Neutral','CO2','transparent','gas','odorless',0,1.977,44,'transparent');

INSERT INTO chemicals(name,nature,chemFormula,color,state,odour,nfactor,density,molarMass,colorInWater)
VALUES('Pottasium sulphate','Neutral','K2SO4','#FBFCFC','solid','odorless',0,2.66,174,'transparent');

INSERT INTO chemicals(name,nature,chemFormula,color,state,odour,nfactor,density,molarMass,colorInWater)
VALUES('Manganese sulphate ','Neutral','MnSO4','#FBFCFC','solid','odorless',0,3.25,151,'#ffe6f2');

INSERT INTO chemicals(name,nature,chemFormula,color,state,odour,nfactor,density,molarMass,colorInWater)
VALUES('Ammonium sulphate ','Neutral','(NH4)2SO4','#FBFCFC','solid','odorless',0,1.77,132,'#ffffff');

INSERT INTO chemicals(name,nature,chemFormula,color,state,odour,nfactor,density,molarMass,colorInWater)
VALUES('Pottasium Chloride','Neutral','KCl','#FBFCFC','solid','odorless',0,1.984,74.5,'transparent');

INSERT INTO chemicals(name,nature,chemFormula,color,state,odour,nfactor,density,molarMass,colorInWater)
VALUES('Lithium Chloride','Neutral','LiCl','#FBFCFC','solid','odorless',0,2.068,42.5,'transparent');

INSERT INTO chemicals(name,nature,chemFormula,color,state,odour,nfactor,density,molarMass,colorInWater)
VALUES('Pottasium perchlorate','Neutral','KClO4','#FBFCFC','solid','odorless',0,2.5239,138.5,'transparent');

INSERT INTO chemicals(name,nature,chemFormula,color,state,odour,nfactor,density,molarMass,colorInWater)
VALUES('Sodium sulphate','Neutral','Na2SO4','#FBFCFC','solid','odorless',0,2.664,142,'transparent');

INSERT INTO chemicals(name,nature,chemFormula,color,state,odour,nfactor,density,molarMass,colorInWater)
VALUES('Sodium nitrate','Neutral','NaNO3','#FBFCFC','solid','sweet',0,2.257,85,'transparent');

INSERT INTO chemicals(name,nature,chemFormula,color,state,odour,nfactor,density,molarMass,colorInWater)
VALUES('Lithium sulphate','Neutral','Li2SO4','#FBFCFC','solid','odorless',0,2.221,110,'transparent');

INSERT INTO chemicals(name,nature,chemFormula,color,state,odour,nfactor,density,molarMass,colorInWater)
VALUES('Lithium nitrate','Neutral','LiNO3','#FBFCFC','solid','odorless',0,2.38,69,'transparent');


INSERT INTO chemicals(name,nature,chemFormula,color,state,odour,nfactor,density,molarMass,colorInWater)
VALUES('ComplexCation_with_Fe','unknown','[Fe(SCN)]2+','#ff0000','liquid','odorless',0,4.5,288.1746,'#ff0000');

INSERT INTO chemicals(name,nature,chemFormula,color,state,odour,nfactor,density,molarMass,colorInWater)
VALUES('ComplexAnion_with_Co','unknown','[Co(Cl)4]2-','#4da6ff','liquid','odorless',0,4.5,201,'#4da6ff');

INSERT INTO chemicals(name,nature,chemFormula,color,state,odour,nfactor,density,molarMass,colorInWater)
VALUES('ComplexCation_with_H20','unknown','[Co(H20)6]2+','#ff4dff','liquid','odorless',0,4.5,167,'#ff4dff');

INSERT INTO chemicals(name,nature,chemFormula,color,state,odour,nfactor,density,molarMass,colorInWater)
VALUES('OgranicSalt','unknown','Osg','#FBFCFC','solid','odorless',0,4.5,100,'transparent');

INSERT INTO chemicals(name,nature,chemFormula,color,state,odour,nfactor,density,molarMass,colorInWater)
VALUES('OCwithBr','unknown','OC-Br','transparent','liquid','odorless',0,4.5,188,'transparent');

INSERT INTO chemicals(name,nature,chemFormula,color,state,odour,nfactor,density,molarMass,colorInWater)
VALUES('vicinalglycol','unknown','OC-VCG','transparent','liquid','odorless',0,4.5,200,'transparent');

INSERT INTO chemicals(name,nature,chemFormula,color,state,odour,nfactor,density,molarMass,colorInWater)
VALUES('OCwithCAN','unknown','OC-CAN','#ff1a1a','liquid','odorless',0,4.5,150,'#ff1a1a');

INSERT INTO chemicals(name,nature,chemFormula,color,state,odour,nfactor,density,molarMass,colorInWater)
VALUES('OCwithKI+NaOCl','unknown','OC-KI+NaOCl','#ffff00','liquid','odorless',0,4.5,270,'transparent');

INSERT INTO chemicals(name,nature,chemFormula,color,state,odour,nfactor,density,molarMass,colorInWater)
VALUES('OCwithFeCl3','unknown','OC-FeCl3','#9A2EFE','liquid','odorless',0,4.5,130,'#9A2EFE');

CREATE TABLE Reactions
(
 id int primary key auto_increment NOT NULL,
reactants text NOT NULL,
catalyst text ,
products text NOT NULL
);
Drop table Reactions;
DESC Reactions;
SELECT * FROM Reactions;
SELECT * FROM chemicals;
INSERT INTO Reactions(reactants,products)
VALUES ('1-Oxalic Acid#2-Sodium Hydroxide','1-Sodium oxalate#2-Water');

INSERT INTO Reactions(reactants,products)
VALUES ('1-Sodium carbonate#2-Hydrochloric Acid','2-Sodium chloride#1-Water#1-Carbondioxide');

INSERT INTO Reactions(reactants,catalyst,products)
VALUES ('2-Pottasium permanganate#10-Ferrous ammonium sulphate','8-Sulphuric Acid','1-Pottasium sulphate#2-Manganese sulphate#5-Ferric sulphate#10-Ammonium sulphate#68-Water');

INSERT INTO Reactions(reactants,products)
VALUES ('1-Hydrochloric Acid#1-Sodium Hydroxide','1-Sodium chloride#1-Water');

INSERT INTO Reactions(reactants,products)
VALUES ('1-Pottasium Hydroxide#1-Hydrochloric Acid','1-Pottasium Chloride#1-Water');

INSERT INTO Reactions(reactants,products)
VALUES ('1-Sulphuric Acid#2-Pottasium Hydroxide','1-Pottasium sulphate#2-Water');

INSERT INTO Reactions(reactants,products)
VALUES ('1-Hydrochloric Acid#1-Lithium Hydroxide','1-Lithium Chloride#1-Water');

INSERT INTO Reactions(reactants,products)
VALUES ('1-Perchloric Acid#1-Pottasium Hydroxide','1-Pottasium perchlorate#1-Water');

INSERT INTO Reactions(reactants,products)
VALUES ('1-Sulphuric Acid#2-Sodium Hydroxide','1-Sodium sulphate#2-Water');

INSERT INTO Reactions(reactants,products)
VALUES ('1-Nitric Acid#1-Sodium Hydroxide','1-Sodium nitrate#1-Water');

INSERT INTO Reactions(reactants,products)
VALUES ('1-Sulphuric Acid#2-Lithium Hydroxide','1-Lithium sulphate#2-Water');

INSERT INTO Reactions(reactants,products)
VALUES ('1-Nitric Acid#1-Lithium Hydroxide','1-Lithium nitrate#1-Water');
 
INSERT INTO Reactions(reactants,products)
VALUES ('1-Nitric Acid#1-Lithium Hydroxide','1-Lithium nitrate#1-Water');

INSERT INTO Reactions(reactants,products)
VALUES ('1-Ferric Chloride#1-Pottasium thiocynatye','300-ComplexCation_with_Fe');

INSERT INTO Reactions(reactants,products)
VALUES ('1-Acetone#1-Cobalt Chloride','300-ComplexAnion_with_Co');

INSERT INTO Reactions(reactants,products)
VALUES ('300-ComplexAnion_with_Co#1-Water','300-ComplexCation_with_H20');

INSERT INTO Reactions(reactants,products)
VALUES ('1-Organicsalt#1-Water#1-Bromine water','300-OCwithBr');

INSERT INTO Reactions(reactants,products)
VALUES ('1-Organicsalt#1-Water#1-Pottasium permanganate','vicinalglycol+Other');

INSERT INTO Reactions(reactants,products)
VALUES ('1-Organicsalt#1-Water#1-Cerric ammonium nitrate','300-OCwithCAN');

INSERT INTO Reactions(reactants,catalyst,products)
VALUES ('1-Organicsalt#1-Water#1-Pottasium Iodide#1-Sodium hypoclorite','heat','300-OCwithKI+NaOCl');


INSERT INTO Reactions(reactants,products)
VALUES ('1-Organicsalt#1-Water#1-Ferric Chloride','300-OCwithFeCl3');



















