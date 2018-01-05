Insert into app_user (first_name,last_name,mail,privilege,reminder, password ) values ('Ivan','Biška','ivan.biska@fer.hr','ADMINISTRATOR',false, 'pass');
Insert into app_user (first_name,last_name,mail,privilege,reminder, password ) values ('Ivana','Mršić','ivana.mrsic@fer.hr','ADMINISTRATOR',false, 'pass');
Insert into app_user (first_name,last_name,mail,privilege,reminder, password ) values ('Luka','Hrgović','luka.hrgovic@fer.hr','ADMINISTRATOR',false, 'pass');
Insert into app_user (first_name,last_name,mail,privilege,reminder, password ) values ('Marko','Cavalli','marko.cavalli@fer.hr','ADMINISTRATOR',false, 'pass');
Insert into app_user (first_name,last_name,mail,privilege,reminder, password ) values ('Marko','Ćurlin','marko.curlin@fer.hr','ADMINISTRATOR',false, 'pass');
Insert into app_user (first_name,last_name,mail,privilege,reminder, password ) values ('Toni','Martinčić','toni.martincic@fer.hr','ADMINISTRATOR',false, 'pass');
Insert into app_user (first_name,last_name,mail,privilege,reminder, password ) values ('Pero','Peric','pero.peric@fer.hr','TENANT',false, 'pass');
Insert into app_user (first_name,last_name,mail,privilege,reminder, password ) values ('Iva','Ivic','iva.ivic@fer.hr','TENANT',false, 'pass');
Insert into app_user (first_name,last_name,mail,privilege,reminder, password ) values ('Ivan','Horvat','ivan.horvat@fer.hr','TENANT',false, 'pass');
Insert into app_user (first_name,last_name,mail,privilege,reminder, password ) values ('Maja','Majic','maja.majic@fer.hr','TENANT',false, 'pass');

Insert into building (address, landlord, funds) values ('Ilica 256', 1, 100532.52);
Insert into building (address, landlord, funds) values ('Ožujska BB', 2, 54625.32);
Insert into building (address, landlord, funds) values ('Savska 56', 3, 15456.23);
Insert into building (address, landlord, funds) values ('Vukovarska 1a', 4, -5947.65);
Insert into building (address, landlord, funds) values ('Lastovska 23', 4, 15.01);

Insert into apartment (building_id, area, owner_id) values (1, 25.23, 7);
Insert into apartment (building_id, area, owner_id) values (1, 25.23, 8);
Insert into apartment (building_id, area, owner_id) values (1, 25.23, 9);
Insert into apartment (building_id, area, owner_id) values (1, 25.23, 4);
Insert into apartment (building_id, area, owner_id) values (2, 56.50, 2);
Insert into apartment (building_id, area, owner_id) values (2, 56.50, 1);
Insert into apartment (building_id, area, owner_id) values (1, 56.50, 3);
Insert into apartment (building_id, area, owner_id) values (2, 56.50, 5);
Insert into apartment (building_id, area, owner_id) values (2, 56.50, 6);
Insert into apartment (building_id, area, owner_id) values (2, 56.50, null);
Insert into apartment (building_id, area, owner_id) values (2, 56.50, null);

Insert into user_notification (description, user_id) values ('Sutra ste na rasporedu za čišćenje snijega',1);
Insert into user_notification (description, user_id) values ('Niste podmirili dugovanje za prošli mjesec',2);
Insert into user_notification (description, user_id) values ('Danas ste na rasporedu za čišćenje snijega',3);
Insert into user_notification (description, user_id) values ('Imate nepodmirene račune',6);
Insert into user_notification (description, user_id) values ('Termin čišćenja snijega uspješno zamijenjen',4);

Insert into announcement (creation_date, expiration_date, creator, content) values (parsedatetime('01.10.17', 'dd.MM.yy'), parsedatetime('02.10.17', 'dd.MM.yy'), 4, 'Pronađeni ključevi');
Insert into announcement (creation_date, creator, content) values (parsedatetime('29.09.17', 'dd.MM.yy'), 2, 'Izgubio ključeve');
Insert into announcement (creation_date, expiration_date, creator, content) values (parsedatetime('02.09.17', 'dd.MM.yy'), parsedatetime('02.10.17', 'dd.MM.yy'), 5, 'Tražim zamjenu termina za čišćenje snijega');
Insert into announcement (creation_date, expiration_date, creator, content) values (parsedatetime('02.10.17', 'dd.MM.yy'), parsedatetime('30.10.17', 'dd.MM.yy'), 1, 'Objavljen raspored čišćenja snijega');
Insert into announcement (creation_date, expiration_date, creator, content) values (parsedatetime('02.10.17', 'dd.MM.yy'), parsedatetime('28.10.17', 'dd.MM.yy'), 2, 'Sastanak sljedeći tjedan u utorak u 18:00');
Insert into announcement (creation_date, creator, content) values (parsedatetime('02.10.17', 'dd.MM.yy'), 6, 'Jel hoće tko na pivu u utorak u 18:00');
Insert into announcement (creation_date, expiration_date, creator, content) values (parsedatetime('02.10.17', 'dd.MM.yy'), parsedatetime('28.10.17', 'dd.MM.yy'), 3, 'Jel hoće tko na pivu u srijedu u 18:00');
Insert into announcement (creation_date, expiration_date, creator, content) values (parsedatetime('28.12.17', 'dd.MM.yy'), parsedatetime('29.10.17', 'dd.MM.yy'), 3, 'Bitna objava');
Insert into announcement (creation_date, expiration_date, creator, content) values (parsedatetime('28.12.17', 'dd.MM.yy'), parsedatetime('27.10.17', 'dd.MM.yy'), 3, 'Jako bitna objava');
Insert into announcement (creation_date, expiration_date, creator, content) values (parsedatetime('28.12.17', 'dd.MM.yy'), parsedatetime('30.10.17', 'dd.MM.yy'), 3, 'Jako bitna objava');

Insert into payment_order (amount, payer, description, payment_due, day_of_payment, receiver) values (
101.25, 1, 'pričuva', parsedatetime('02.10.17', 'dd.MM.yy'),parsedatetime('01.10.17', 'dd.MM.yy'), 2);
Insert into payment_order (amount, payer, description, payment_due, day_of_payment, receiver) values (
595.05, 2, 'čišćenje', parsedatetime('08.06.16', 'dd.MM.yy'),parsedatetime('02.08.16', 'dd.MM.yy'), 3);
Insert into payment_order (amount, payer, description, payment_due, day_of_payment, receiver) values (
68.10, 1, 'pričuva', parsedatetime('08.06.16', 'dd.MM.yy'),parsedatetime('28.09.17', 'dd.MM.yy'), 6);
Insert into payment_order (amount, payer, description, payment_due, day_of_payment, receiver) values (
1582.00, 3, 'pričuva', parsedatetime('28.09.17', 'dd.MM.yy'),parsedatetime('11.10.17', 'dd.MM.yy'), 4);
Insert into payment_order (amount, payer, description, payment_due, day_of_payment, receiver) values (
99.99, 5, 'popravak', parsedatetime('30.10.15', 'dd.MM.yy'),parsedatetime('01.12.15', 'dd.MM.yy'), 2);

Insert into cost (amount, is_urgent, description, status, creator_id, created_on) values (
150000.23, true, 'popravak krova', 'OFFER_SELECTION', 1, parsedatetime('01.12.15', 'dd.MM.yy'));
Insert into cost (amount, is_urgent, description, status, creator_id, created_on) values (
250.65, false, 'troškovi čišćenja', 'PAID', 2, parsedatetime('28.09.17', 'dd.MM.yy'));
Insert into cost (amount, is_urgent, description, status, creator_id, created_on) values (
75.45, false, 'uvođenje video nadzora', 'OFFER_SELECTION', 1, parsedatetime('01.01.15', 'dd.MM.yy'));
Insert into cost (amount, is_urgent, description, status, creator_id, created_on) values (
150000.65, false, 'redovan servis dizala', 'FUNDRAISING', 1, parsedatetime('08.06.16', 'dd.MM.yy'));
Insert into cost (amount, is_urgent, description, status, creator_id, created_on) values (
150000.65, true, 'nova garažna vrata', 'FUNDS_COLLECTED', 1, parsedatetime('02.08.16', 'dd.MM.yy'));

Insert into snow_clearing_date (clearing_date, clearing_id, ask_change) values (parsedatetime('02.01.16', 'dd.MM.yy'), 1, false);
Insert into snow_clearing_date (clearing_date, clearing_id, ask_change) values (parsedatetime('03.02.17', 'dd.MM.yy'), 2, false);
Insert into snow_clearing_date (clearing_date, clearing_id, ask_change) values (parsedatetime('02.02.16', 'dd.MM.yy'), 1, false);
Insert into snow_clearing_date (clearing_date, clearing_id, ask_change) values (parsedatetime('01.04.15', 'dd.MM.yy'), 2, true);
Insert into snow_clearing_date (clearing_date, clearing_id, ask_change) values (parsedatetime('22.01.15', 'dd.MM.yy'), 2, true);
Insert into snow_clearing_date (clearing_date, clearing_id, ask_change) values (parsedatetime('22.01.18', 'dd.MM.yy'), 2, true);
Insert into snow_clearing_date (clearing_date, clearing_id, ask_change) values (parsedatetime('23.01.18', 'dd.MM.yy'), 1, true);
