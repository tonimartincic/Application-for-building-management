Insert into app_user (first_name,last_name,mail,privilege,apartment_id,reminder ) values ('Ivan','Biška','ivan.biska@fer.hr','admin',1,false);
Insert into app_user (first_name,last_name,mail,privilege,apartment_id,reminder ) values ('Ivana','Mršić','ivana.mrsic@fer.hr','admin',2,false);
Insert into app_user (first_name,last_name,mail,privilege,apartment_id,reminder ) values ('Luka','Hrgović','luka.hrgovic@fer.hr','admin',3,false);
Insert into app_user (first_name,last_name,mail,privilege,apartment_id,reminder ) values ('Marko','Cavalli','marko.cavalli@fer.hr','admin',4,false);
Insert into app_user (first_name,last_name,mail,privilege,apartment_id,reminder ) values ('Marko','Ćurlin','marko.curlin@fer.hr','admin',5,false);
Insert into app_user (first_name,last_name,mail,privilege,apartment_id,reminder ) values ('Toni','Martinčić','toni.martincic@fer.hr','admin',6,false);

Insert into building (address, landlord, funds) values ('Ilica 256', 1, 100532.52);
Insert into building (address, landlord, funds) values ('Ožujska BB', 2, 54625.32);
Insert into building (address, landlord, funds) values ('Savska 56', 3, 15456.23);
Insert into building (address, landlord, funds) values ('Vukovarska 1a', 4, -5947.65);
Insert into building (address, landlord, funds) values ('Lastovska 23', 4, 15.01);

Insert into apartment (building_id, area, contact) values (1, 25.23);
Insert into apartment (building_id, area, contact) values (2, 56.50);
Insert into apartment (building_id, area, contact) values (3, 60);
Insert into apartment (building_id, area, contact) values (1, 54);
Insert into apartment (building_id, area, contact) values (2, 67);
Insert into apartment (building_id, area, contact) values (4, 225.65);

Insert into user_notification (description, user_id) values ('Sutra ste na rasporedu za čišćenje snijega',1);
Insert into user_notification (description, user_id) values ('Niste podmirili dugovanje za prošli mjesec',2);
Insert into user_notification (description, user_id) values ('Danas ste na rasporedu za čišćenje snijega',3);
Insert into user_notification (description, user_id) values ('Imate nepodmirene račune',6);
Insert into user_notification (description, user_id) values ('Termin čišćenja snijega uspješno zamijenjen',4);

Insert into announcement (expirationDate, creator, content) values (parsedatetime('02.10.17', 'dd.MM.yy'), 4, 'Pronađeni ključevi');
Insert into announcement (expirationDate, creator, content) values (parsedatetime('08.06.16', 'dd.MM.yy'), 2, 'Izgubio ključeve');
Insert into announcement (expirationDate, creator, content) values (parsedatetime('02.02.17', 'dd.MM.yy'), 5, 'Tražim zamjenu termina za čišćenje snijega');
Insert into announcement (expirationDate, creator, content) values (parsedatetime('30.10.15', 'dd.MM.yy'), 1, 'Objavljen raspored čišćenja snijega');
Insert into announcement (expirationDate, creator, content) values (parsedatetime('28.09.17', 'dd.MM.yy'), 2, 'Sastanak sljedeći tjedan u utorak u 18:00');

Insert into payment_order (amount, payer, description, payment_due, day_of_payment, reciever, reciever_type, payer_type) values (
101.25, 1, 'pričuva', parsedatetime('02.10.17', 'dd.MM.yy'),parsedatetime('01.10.17', 'dd.MM.yy'), 1, 'building','user');
Insert into payment_order (amount, payer, description, payment_due, day_of_payment, reciever, reciever_type, payer_type) values (
595.05, 2, 'čišćenje', parsedatetime('08.06.16', 'dd.MM.yy'),parsedatetime('02.08.16', 'dd.MM.yy'), 3, 'company','landlord');
Insert into payment_order (amount, payer, description, payment_due, day_of_payment, reciever, reciever_type, payer_type) values (
68.10, 1, 'pričuva', parsedatetime('08.06.16', 'dd.MM.yy'),parsedatetime('28.09.17', 'dd.MM.yy'), 6, 'building','user');
Insert into payment_order (amount, payer, description, payment_due, day_of_payment, reciever, reciever_type, payer_type) values (
1582.00, 3, 'pričuva', parsedatetime('28.09.17', 'dd.MM.yy'),parsedatetime('11.10.17', 'dd.MM.yy'), 4, 'building','user');
Insert into payment_order (amount, payer, description, payment_due, day_of_payment, reciever, reciever_type, payer_type) values (
99.99, 5, 'popravak', parsedatetime('30.10.15', 'dd.MM.yy'),parsedatetime('01.12.15', 'dd.MM.yy'), 2, 'company','admin');

Insert into cost (amount, isUrgent, description, status, creator_id, created_on) values (
150000.23, true, 'popravak krova', 'odabir ponude', 1, parsedatetime('01.12.15', 'dd.MM.yy'));
Insert into cost (amount, isUrgent, description, status, creator_id, created_on) values (
250.65, true, 'troškovi čišćenja', 'plaćeno', 2, parsedatetime('28.09.17', 'dd.MM.yy'));
Insert into cost (amount, isUrgent, description, status, creator_id, created_on) values (
75.45, true, 'uvođenje video nadzora', 'odabir ponude', 1, parsedatetime('01.01.15', 'dd.MM.yy'));
Insert into cost (amount, isUrgent, description, status, creator_id, created_on) values (
150000.65, true, 'redovan servis dizala', 'skupljanje sredstava', 1, parsedatetime('08.06.16', 'dd.MM.yy'));
Insert into cost (amount, isUrgent, description, status, creator_id, created_on) values (
150000.65, true, 'nova garažna vrata', 'sredstva skupljena', 1, parsedatetime('02.08.16', 'dd.MM.yy'));

Insert into snow_clearing_schedule (clearing_date, clearing_id, ask_change) values (parsedatetime('02.01.16', 'dd.MM.yy'), 1, false);
Insert into snow_clearing_schedule (clearing_date, clearing_id, ask_change) values (parsedatetime('03.02.17', 'dd.MM.yy'), 2, false);
Insert into snow_clearing_schedule (clearing_date, clearing_id, ask_change) values (parsedatetime('02.02.16', 'dd.MM.yy'), 1, false);
Insert into snow_clearing_schedule (clearing_date, clearing_id, ask_change) values (parsedatetime('01.04.15', 'dd.MM.yy'), 2, true);
Insert into snow_clearing_schedule (clearing_date, clearing_id, ask_change) values (parsedatetime('22.01.15', 'dd.MM.yy'), 2, true);
