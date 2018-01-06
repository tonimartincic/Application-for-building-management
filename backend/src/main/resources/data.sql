Insert into app_user (first_name,last_name,mail,privilege,reminder, password ) values ('Ivan','Biška','ivan.biska@fer.hr','ADMINISTRATOR',false, 'pass');
Insert into app_user (first_name,last_name,mail,privilege,reminder, password ) values ('Ivana','Mršić','ivana.mrsic@fer.hr','ADMINISTRATOR',false, 'pass');
Insert into app_user (first_name,last_name,mail,privilege,reminder, password ) values ('Luka','Hrgović','luka.hrgovic@fer.hr','ADMINISTRATOR',false, 'pass');
Insert into app_user (first_name,last_name,mail,privilege,reminder, password ) values ('Marko','Cavalli','marko.cavalli@fer.hr','ADMINISTRATOR',true, 'pass');
Insert into app_user (first_name,last_name,mail,privilege,reminder, password ) values ('Marko','Ćurlin','marko.curlin@fer.hr','ADMINISTRATOR',false, 'pass');
Insert into app_user (first_name,last_name,mail,privilege,reminder, password ) values ('Toni','Martinčić','toni.martincic@fer.hr','ADMINISTRATOR',false, 'pass');
Insert into app_user (first_name,last_name,mail,privilege,reminder, password ) values ('Pero','Peric','pero.peric@fer.hr','TENANT',false, 'pass');
Insert into app_user (first_name,last_name,mail,privilege,reminder, password ) values ('Iva','Ivic','iva.ivic@fer.hr','TENANT',false, 'pass');
Insert into app_user (first_name,last_name,mail,privilege,reminder, password ) values ('Ivan','Horvat','ivan.horvat@fer.hr','TENANT',false, 'pass');
Insert into app_user (first_name,last_name,mail,privilege,reminder, password ) values ('Maja','Majic','maja.majic@fer.hr','TENANT',false, 'pass');

Insert into app_user (first_name, last_name, mail, privilege, reminder, password) values ('Stanar1_ime','Stanar1_prezime','stanar1@fer.hr','TENANT',false, 'pass');
Insert into app_user (first_name, last_name, mail, privilege, reminder, password) values ('Stanar2_ime','Stanar2_prezime','stanar2@fer.hr','TENANT',false, 'pass');
Insert into app_user (first_name, last_name, mail, privilege, reminder, password) values ('Stanar3_ime','Stanar3_prezime','stanar3@fer.hr','TENANT',false, 'pass');
Insert into app_user (first_name, last_name, mail, privilege, reminder, password) values ('Stanar4_ime','Stanar4_prezime','stanar4@fer.hr','TENANT',false, 'pass');
Insert into app_user (first_name, last_name, mail, privilege, reminder, password) values ('Stanar5_ime','Stanar5_prezime','stanar5@fer.hr','TENANT',false, 'pass');
Insert into app_user (first_name, last_name, mail, privilege, reminder, password) values ('Stanar6_ime','Stanar6_prezime','stanar6@fer.hr','TENANT',false, 'pass');
Insert into app_user (first_name, last_name, mail, privilege, reminder, password) values ('Stanar7_ime','Stanar7_prezime','stanar7@fer.hr','TENANT',false, 'pass');
Insert into app_user (first_name, last_name, mail, privilege, reminder, password) values ('Stanar8_ime','Stanar8_prezime','stanar8@fer.hr','TENANT',false, 'pass');

Insert into app_user (first_name, last_name, mail, privilege, reminder, password) values ('Predstavnik1234_ime','Predstavnik1234_prezime','predstavnik1234@fer.hr','TENANT_REPRESENTATIVE',false, 'pass');
Insert into app_user (first_name, last_name, mail, privilege, reminder, password) values ('Predstavnik5678_ime','Predstavnik5678_prezime','predstavnik5678@fer.hr','TENANT_REPRESENTATIVE',false, 'pass');

Insert into app_user (first_name, last_name, mail, privilege, reminder, password) values ('Upravitelj1234_ime','Upravitelj1234_prezime','upravitelj5678@fer.hr','MANAGER',false, 'pass');
Insert into app_user (first_name, last_name, mail, privilege, reminder, password) values ('Upravitelj5678_ime','Upravitelj5678_prezime','upravitelj5678@fer.hr','MANAGER',false, 'pass');
Insert into app_user (first_name, last_name, mail, privilege, reminder, password) values ('Upravitelj568_ime','Upravitelj578_prezime','upravitelj568@fer.hr','MANAGER',false, 'pass');
Insert into app_user (first_name, last_name, mail, privilege, reminder, password) values ('Upravitelj578_ime','Upravitelj567_prezime','upravitelj578@fer.hr','MANAGER',false, 'pass');
Insert into app_user (first_name, last_name, mail, privilege, reminder, password) values ('Upravitelj678_ime','Upravitelj678_prezime','upravitelj678@fer.hr','MANAGER',false, 'pass');

Insert into building (address, landlord, manager,  funds) values ('Ilica 256', 1, 23, 100532.52);
Insert into building (address, landlord, manager, funds) values ('Ožujska BB', 2, 24, 54625.32);
Insert into building (address, landlord, funds) values ('Savska 56', 3, 15456.23);
Insert into building (address, landlord, funds) values ('Vukovarska 1a', 4, -5947.65);
Insert into building (address, landlord, funds) values ('Lastovska 23', 4, 15.01);

Insert into building (address, manager, funds) values ('Prva zgrada', 21, 100000);
Insert into building (address, manager, funds) values ('Druga zgrada', 22, 50000);

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

Insert into apartment (building_id, area, owner_id) values (6, 56.50, 11);
Insert into apartment (building_id, area, owner_id) values (6, 56.50, 12);
Insert into apartment (building_id, area, owner_id) values (6, 56.50, 13);
Insert into apartment (building_id, area, owner_id) values (6, 56.50, 14);
Insert into apartment (building_id, area, owner_id) values (6, 56.50, 19);
Insert into apartment (building_id, area, owner_id) values (7, 56.50, 15);
Insert into apartment (building_id, area, owner_id) values (7, 56.50, 16);
Insert into apartment (building_id, area, owner_id) values (7, 56.50, 17);
Insert into apartment (building_id, area, owner_id) values (7, 56.50, 18);
Insert into apartment (building_id, area, owner_id) values (7, 56.50, 20);

Insert into user_notification (description, user_id, is_read, creation_date) values ('Sutra ste na rasporedu za čišćenje snijega',1, false, parsedatetime('01.12.17', 'dd.MM.yy'));
Insert into user_notification (description, user_id, is_read, creation_date) values ('Niste podmirili dugovanje za prošli mjesec',2, false, parsedatetime('02.06.17', 'dd.MM.yy'));
Insert into user_notification (description, user_id, is_read, creation_date) values ('Danas ste na rasporedu za čišćenje snijega',4, false, parsedatetime('02.11.17', 'dd.MM.yy'));
Insert into user_notification (description, user_id, is_read, creation_date) values ('Imate nepodmirene račune',6, false, parsedatetime('01.10.17', 'dd.MM.yy'));
Insert into user_notification (description, user_id, is_read, creation_date) values ('Termin čišćenja snijega uspješno zamijenjen',4, false, parsedatetime('30.12.17', 'dd.MM.yy'));
Insert into user_notification (description, user_id, is_read, creation_date) values ('Inicijalno pročitano',11, true, parsedatetime('03.11.17', 'dd.MM.yy'));
Insert into user_notification (description, user_id, is_read, creation_date) values ('Još nešto inicijalno pročitano',11, true, parsedatetime('03.11.17', 'dd.MM.yy'));
Insert into user_notification (description, user_id, is_read, creation_date) values ('Sutra ste na rasporedu za čišćenje snijega',11, false, parsedatetime('28.12.17', 'dd.MM.yy'));
Insert into user_notification (description, user_id, is_read, creation_date) values ('Danas ste na rasporedu za čišćenje snijega',11, false, parsedatetime('03.11.17', 'dd.MM.yy'));

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

Insert into announcement (creation_date, expiration_date, creator, content) values (parsedatetime('28.12.17', 'dd.MM.yy'), parsedatetime('30.10.17', 'dd.MM.yy'), 11, 'Objava stanara 1');
Insert into announcement (creation_date, expiration_date, creator, content) values (parsedatetime('28.12.17', 'dd.MM.yy'), parsedatetime('30.10.17', 'dd.MM.yy'), 12, 'Objava stanara 2');
Insert into announcement (creation_date, expiration_date, creator, content) values (parsedatetime('28.12.17', 'dd.MM.yy'), parsedatetime('30.10.17', 'dd.MM.yy'), 13, 'Objava stanara 3');
Insert into announcement (creation_date, expiration_date, creator, content) values (parsedatetime('28.12.17', 'dd.MM.yy'), parsedatetime('30.10.17', 'dd.MM.yy'), 14, 'Objava stanara 4');
Insert into announcement (creation_date, expiration_date, creator, content) values (parsedatetime('28.12.17', 'dd.MM.yy'), parsedatetime('30.10.17', 'dd.MM.yy'), 15, 'Objava stanara 5');
Insert into announcement (creation_date, expiration_date, creator, content) values (parsedatetime('28.12.17', 'dd.MM.yy'), parsedatetime('30.10.17', 'dd.MM.yy'), 16, 'Objava stanara 6');
Insert into announcement (creation_date, expiration_date, creator, content) values (parsedatetime('28.12.17', 'dd.MM.yy'), parsedatetime('30.10.17', 'dd.MM.yy'), 17, 'Objava stanara 7');
Insert into announcement (creation_date, expiration_date, creator, content) values (parsedatetime('28.12.17', 'dd.MM.yy'), parsedatetime('30.10.17', 'dd.MM.yy'), 18, 'Objava stanara 8');
Insert into announcement (creation_date, expiration_date, creator, content) values (parsedatetime('28.12.17', 'dd.MM.yy'), parsedatetime('30.10.17', 'dd.MM.yy'), 19, 'Objava predstavnika 1234');
Insert into announcement (creation_date, expiration_date, creator, content) values (parsedatetime('28.12.17', 'dd.MM.yy'), parsedatetime('30.10.17', 'dd.MM.yy'), 20, 'Objava predstavnika 5678');

Insert into payment_order (amount, payer, description, payment_due, day_of_payment, receiver) values (
101.25, 1, 'pričuva', parsedatetime('02.10.17', 'dd.MM.yy'),parsedatetime('01.10.17', 'dd.MM.yy'), 2);
Insert into payment_order (amount, payer, description, payment_due, day_of_payment, receiver) values (
595.05, 4, 'čišćenje', parsedatetime('08.06.16', 'dd.MM.yy'),parsedatetime('02.08.16', 'dd.MM.yy'), 3);
Insert into payment_order (amount, payer, description, payment_due, day_of_payment, receiver) values (
68.10, 1, 'pričuva', parsedatetime('08.06.16', 'dd.MM.yy'),parsedatetime('28.09.17', 'dd.MM.yy'), 6);
Insert into payment_order (amount, payer, description, payment_due, day_of_payment, receiver) values (
1582.00, 3, 'pričuva', parsedatetime('28.09.17', 'dd.MM.yy'),parsedatetime('11.10.17', 'dd.MM.yy'), 4);
Insert into payment_order (amount, payer, description, payment_due, day_of_payment, receiver) values (
99.99, 5, 'popravak', parsedatetime('30.10.15', 'dd.MM.yy'),parsedatetime('01.12.15', 'dd.MM.yy'), 2);

Insert into payment_order (amount, payer, description, payment_due, day_of_payment, receiver) values (
99.99, 11, 'Režije', parsedatetime('30.10.15', 'dd.MM.yy'),parsedatetime('01.12.15', 'dd.MM.yy'), 19);
Insert into payment_order (amount, payer, description, payment_due, day_of_payment, receiver) values (
99.99, 12, 'Režije', parsedatetime('30.10.15', 'dd.MM.yy'),parsedatetime('01.12.15', 'dd.MM.yy'), 19);
Insert into payment_order (amount, payer, description, payment_due, day_of_payment, receiver) values (
99.99, 13, 'Režije', parsedatetime('30.10.15', 'dd.MM.yy'),parsedatetime('01.12.15', 'dd.MM.yy'), 19);
Insert into payment_order (amount, payer, description, payment_due, day_of_payment, receiver) values (
99.99, 14, 'Režije', parsedatetime('30.10.15', 'dd.MM.yy'),parsedatetime('01.12.15', 'dd.MM.yy'), 19);
Insert into payment_order (amount, payer, description, payment_due, day_of_payment, receiver) values (
99.99, 15, 'Režije', parsedatetime('30.10.15', 'dd.MM.yy'),parsedatetime('01.12.15', 'dd.MM.yy'), 20);
Insert into payment_order (amount, payer, description, payment_due, day_of_payment, receiver) values (
99.99, 16, 'Režije', parsedatetime('30.10.15', 'dd.MM.yy'),parsedatetime('01.12.15', 'dd.MM.yy'), 20);
Insert into payment_order (amount, payer, description, payment_due, day_of_payment, receiver) values (
99.99, 17, 'Režije', parsedatetime('30.10.15', 'dd.MM.yy'),parsedatetime('01.12.15', 'dd.MM.yy'), 20);
Insert into payment_order (amount, payer, description, payment_due, day_of_payment, receiver) values (
99.99, 18, 'Režije', parsedatetime('30.10.15', 'dd.MM.yy'),parsedatetime('01.12.15', 'dd.MM.yy'), 20);

Insert into cost (amount, is_urgent, description, status, creator_id, created_on) values (
150000.23, true, 'popravak krova', 'OFFER_SELECTION', 1, parsedatetime('01.12.15', 'dd.MM.yy'));
Insert into cost (amount, is_urgent, description, status, creator_id, created_on) values (
250.65, false, 'troškovi čišćenja', 'PAID', 2, parsedatetime('28.09.17', 'dd.MM.yy'));
Insert into cost (amount, is_urgent, description, status, creator_id, created_on) values (
75.45, false, 'uvođenje video nadzora', 'OFFER_SELECTION', 3, parsedatetime('01.01.15', 'dd.MM.yy'));
Insert into cost (amount, is_urgent, description, status, creator_id, created_on) values (
150000.65, false, 'redovan servis dizala', 'FUNDRAISING', 4, parsedatetime('08.06.16', 'dd.MM.yy'));
Insert into cost (amount, is_urgent, description, status, creator_id, created_on) values (
150000.65, true, 'nova garažna vrata', 'FUNDS_COLLECTED', 5, parsedatetime('02.08.16', 'dd.MM.yy'));

Insert into cost (amount, is_urgent, description, status, creator_id, created_on) values (
1500, true, 'Nova garažna vrata', 'FUNDS_COLLECTED', 11, parsedatetime('02.08.16', 'dd.MM.yy'));
Insert into cost (amount, is_urgent, description, status, creator_id, created_on) values (
1500, true, 'Nova garažna vrata', 'FUNDS_COLLECTED', 12, parsedatetime('02.08.16', 'dd.MM.yy'));
Insert into cost (amount, is_urgent, description, status, creator_id, created_on) values (
1500, true, 'Nova garažna vrata', 'FUNDS_COLLECTED', 13, parsedatetime('02.08.16', 'dd.MM.yy'));
Insert into cost (amount, is_urgent, description, status, creator_id, created_on) values (
1500, true, 'Nova garažna vrata', 'FUNDS_COLLECTED', 14, parsedatetime('02.08.16', 'dd.MM.yy'));
Insert into cost (amount, is_urgent, description, status, creator_id, created_on) values (
1500, true, 'Nova garažna vrata', 'FUNDS_COLLECTED', 15, parsedatetime('02.08.16', 'dd.MM.yy'));
Insert into cost (amount, is_urgent, description, status, creator_id, created_on) values (
1500, true, 'Nova garažna vrata', 'FUNDS_COLLECTED', 16, parsedatetime('02.08.16', 'dd.MM.yy'));
Insert into cost (amount, is_urgent, description, status, creator_id, created_on) values (
1500, true, 'Nova garažna vrata', 'FUNDS_COLLECTED', 17, parsedatetime('02.08.16', 'dd.MM.yy'));
Insert into cost (amount, is_urgent, description, status, creator_id, created_on) values (
1500, true, 'Nova garažna vrata', 'FUNDS_COLLECTED', 18, parsedatetime('02.08.16', 'dd.MM.yy'));
Insert into cost (amount, is_urgent, description, status, creator_id, created_on) values (
1500, true, 'Nova garažna vrata', 'FUNDS_COLLECTED', 19, parsedatetime('02.08.16', 'dd.MM.yy'));
Insert into cost (amount, is_urgent, description, status, creator_id, created_on) values (
1500, true, 'Nova garažna vrata', 'FUNDS_COLLECTED', 20, parsedatetime('02.08.16', 'dd.MM.yy'));

Insert into snow_clearing_date (clearing_date, clearing_id, ask_change) values (parsedatetime('02.01.16', 'dd.MM.yy'), 1, false);
Insert into snow_clearing_date (clearing_date, clearing_id, ask_change) values (parsedatetime('03.02.17', 'dd.MM.yy'), 2, false);
Insert into snow_clearing_date (clearing_date, clearing_id, ask_change) values (parsedatetime('02.02.16', 'dd.MM.yy'), 1, false);
Insert into snow_clearing_date (clearing_date, clearing_id, ask_change) values (parsedatetime('01.04.15', 'dd.MM.yy'), 2, true);
Insert into snow_clearing_date (clearing_date, clearing_id, ask_change) values (parsedatetime('22.01.15', 'dd.MM.yy'), 2, true);
Insert into snow_clearing_date (clearing_date, clearing_id, ask_change) values (parsedatetime('22.01.18', 'dd.MM.yy'), 2, true);
Insert into snow_clearing_date (clearing_date, clearing_id, ask_change) values (parsedatetime('23.01.18', 'dd.MM.yy'), 1, true);
