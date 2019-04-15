DROP DATABASE IF EXISTS 'opulent_auctions';
CREATE DATABASE 'opulent_auctions';

USE opulent_auctions;


INSERT INTO inventories
    (id, Item_name, Item_Desc, Item_Img, Item_Qty, Starting_Bid_Price, Ending_Bid_Price, createdAt, updatedAt, category)
VALUES
    (1, '2014 LaFerrari', 'This vehicle has 2,579 miles, a clean title, one owner, and is located in Long Beach.', 'https://www.dupontregistry.com/autos/remote.jpg.ashx?404=default&width=644&height=428&urlb64=aHR0cHM6Ly9jZG4uZGVhbGVyYWNjZWxlcmF0ZS5jb20vZnVzaW9uLzEvMzIxLzEyMTA2Lzc5MHgxMDI0LzIwMTUtZmVycmFyaS1sYWZlcnJhcmktMmRyLWNwZQ&hmac=JJCu2CWjEeQ', 1, 1,300,000, 2,950,000, '', '', 'Cars');
INSERT INTO Products
    
(id, Item_name, Item_Desc, Item_Img, Item_Qty, Starting_Bid_Price, Ending_Bid_Price, createdAt, updatedAt)
VALUES
    (2, '2018 Bugatti Chiron', 'This vehicle has 250 miles located in Nashville, Tennesse', 'https://assets.bugatti.com/fileadmin/_processed_/sei/p54/se-image-4d7e0aefef47f54a3b7f7c4c8d619141.jpg', 1, 2,150,000, 3,400,000,'', '', 'Cars');
INSERT INTO Products
    
(id, Item_name, Item_Desc, Item_Img, Item_Qty, Starting_Bid_Price, Ending_Bid_Price, createdAt, updatedAt)
VALUES
    (3, '2015 McLaren P1', 'P1with MSO Papaya Spark Exterior Paint, MSO Wider Driver and Passenger Seats, MSO P1 Logo Embroidered on Headrest, MSO Contrast Stitch on Steering Wheel and Papaya Spark Door Accent. Located in Boston', 'https://pictures.topspeed.com/IMG/jpg/201408/2015-mclaren-p1-by-mso.jpg', 1, 1,200,000, 2,600,000, ' ', '', 'Cars');
INSERT INTO Products
    
(id, Item_name, Item_Desc, Item_Img, Item_Qty, Starting_Bid_Price, Ending_Bid_Price, createdAt, updatedAt)
VALUES
    (4, '2014 Pagani Huayra Tempesta', 'Pacchetto Tempesta Chassis 87/100, One Owner Car, Full Bare Red Carbon Fiber Body,700 Miles', 'http://gtspirit.com/wp-content/uploads/2016/05/005_Pagani-Huayra-Tempesta-Package.jpg', 1, 1,500,000 ,3,650,000, '', '', 'Cars' );








INSERT INTO Products

(id, Item_name, Item_Desc, Item_Img, Item_Qty, Starting_Bid_Price, Ending_Bid_Price, createdAt, updatedAt)
VALUES
(5, 'Chimpanzee', 'The chimpanzee is covered in coarse black hair, but has a bare face, fingers, toes, palms of the hands, and soles of the feet. It is more robust than the bonobo, weighing between 40 and 65 kg(88 and 143 lb) and measuring about 63 to 94 cm(25 to 37 in).', 'https://peopledotcom.files.wordpress.com/2018/09/chimp.jpg', 4, 500, 2,000, '', '', 'Animals' );

INSERT INTO Products

    (id, Item_name, Item_Desc, Item_Img, Item_Qty, Starting_Bid_Price, Ending_Bid_Price, createdAt, updatedAt)
VALUES
    (6, 'Golden Eagle', 'The golden eagle is a very large raptor, 66 to 102 centimetres (26 to 40 in) in length. Its wings are broad and the wingspan is 1.8 to 2.34 metres (5 ft 11 in to 7 ft 8 in).[4][5][6][7] Golden eagles’ wingspan is the fifth largest among living eagle species.', 'https://upload.wikimedia.org/wikipedia/commons/9/91/GoldenEagle-Nova.jpg', 2, 3,500, 10,000, '', '', 'Animals' );

INSERT INTO Products

    (id, Item_name, Item_Desc, Item_Img, Item_Qty, Starting_Bid_Price, Ending_Bid_Price, createdAt, updatedAt)
VALUES
    (7, 'White Tiger', 'The tiger has a muscular body with powerful forelimbs, a large head and a tail that is about half the length of its body. Its pelage is dense and heavy, and colouration varies between shades of orange and brown with white ventral areas and distinctive vertical black stripes that are unique in each individual.', 'https://cdn.europosters.eu/image/1300/image/750/glass-art/white-tiger-120x80-cm-i57253.jpg', 5, 60,000, 120,000, '', '', 'Animals' );

INSERT INTO Products

    (id, Item_name, Item_Desc, Item_Img, Item_Qty, Starting_Bid_Price, Ending_Bid_Price, createdAt, updatedAt)
VALUES
    (8, 'Skunk', 'Skunk species vary in size from about 15.6 to 37 in (40 to 94 cm) long and in weight from about 1.1 lb (0.50 kg) (spotted skunks) to 18 lb (8.2 kg) (hog-nosed skunks). They have moderately elongated bodies with relatively short, well-muscled legs and long front claws for digging.', 'https://www.discoverwildcare.org/wp-content/uploads/2016/02/McCabeKirk.jpg', 45, 100, 400, '', '', 'Animals' );





INSERT INTO Products

    (id, Item_name, Item_Desc, Item_Img, Item_Qty, Starting_Bid_Price, Ending_Bid_Price, createdAt, updatedAt)
VALUES
    (9, 'Diamond Tennis Necklace', 'Inspired by the Wesekh Necklaces from Ancient Egypt, Tennis Chains provide an iconic, retro look that marries thin and thick chains with everything from black and yellow to clear and gold CZ stones.', 'https://cdn.shopify.com/s/files/1/2426/2913/products/product-image-576446496_1200x1200.jpg?v=1528090146', 10, 75,000, 200,000, '', '', 'Jewelry' );

INSERT INTO Products

    (id, Item_name, Item_Desc, Item_Img, Item_Qty, Starting_Bid_Price, Ending_Bid_Price, createdAt, updatedAt)
VALUES
    (10, 'Diamond Encrusted Gold Cuban Link Necklace', 'The Cuban Link chain is one of the most popular style of chains out there, its chunky dominate look compliments a smaller chain and pendant perfectly.', 'https://image.dhgate.com/0x0/f2/albu/g5/M01/19/E1/rBVaJFlDXD2AbJiwAAOq0nSdVsA666.jpg?f=bm%7Caff%7Cadmitad%7C302341%7Cb4aa16fd487dbc362bcd37ea05ebe718%7C197649%7C%7C%7C%7C%7CDevice%7C&utm_source=admitad&utm_medium=Affiliate&utm_content=b4aa16fd487dbc362bcd37ea05ebe718&utm_campaign=302341', 75, 300,000, 450,000, '', '', 'Jewelry' );

INSERT INTO Products

    (id, Item_name, Item_Desc, Item_Img, Item_Qty, Starting_Bid_Price, Ending_Bid_Price, createdAt, updatedAt)
VALUES
    (11, 'Gold and Rose Gold Diamond Ring', 'A rowof sparkling French-set diamonds add brilliance to the band of this classic diamond engagement ring. A sparkling pavé halo adds brilliance around your choice of center diamond. In whole, a brilliant way to show your affection.', 'https://www.kay.com/images/products/9919/991959204_MV_ZM.jpg', 3, 30,000, 40,000, '', '', 'Jewelry' );

INSERT INTO Products

    (id, Item_name, Item_Desc, Item_Img, Item_Qty, Starting_Bid_Price, Ending_Bid_Price, createdAt, updatedAt)
VALUES
    (12, 'Pearl Earrings', 'Ladies pair piercedhoop earrings,designed with bowtie decor earring. Beautiful and fashionable ear stud and ideal ear ornament for ladies wearing on any occasion. Fish hook design is easy and convenient for wearing or taking off.', '', 1, 5,000, 14,000, '', '', 'Jewelry' );

