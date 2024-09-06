INSERT INTO hotels (name, rating, city_center, city_id)
VALUES ('New York Grand Hotel', 0, 1, (SELECT id FROM cities WHERE name = 'New York'));

-- Retrieve the new hotel_id
SET @hotel_id = (SELECT id FROM hotels WHERE name = 'New York Grand Hotel');

-- Insert sample reviews with correct hotel_id
INSERT INTO reviews (user_id, hotel_id, title, description, overall_rating, date_posted, staff_rating, amenities_rating, hygiene_rating, guest_comfort_rating, value_proposition_rating, location_rating, free_wifi_rating)
VALUES
(1, @hotel_id, 'Great Stay', 'The hotel was amazing with great amenities.', 9.5, '2024-09-01', 9.0, 8.0, 8.5, 8.5, 8.0, 9.0, 7.5),
(2, @hotel_id, 'Good but Room for Improvement', 'The stay was generally good but could use some improvements.', 5.0, '2024-09-02', 7.5, 7.0, 6.5, 7.0, 6.5, 8.0, 6.0),
(3, @hotel_id, 'Fantastic Experience', 'A truly fantastic experience with excellent service.', 9.0, '2024-09-03', 9.5, 9.0, 9.0, 9.0, 9.0, 9.5, 8.5),
(4, @hotel_id, 'Average Stay', 'The stay was average, nothing too special.', 6.5, '2024-09-04', 6.0, 6.5, 7.0, 6.5, 6.5, 7.0, 6.0);

-- Calculate the average overall rating
SET @average_rating = (SELECT AVG(overall_rating) FROM reviews WHERE hotel_id = @hotel_id);

-- Update the hotel's rating with the calculated average
UPDATE hotels SET rating = @average_rating WHERE id = @hotel_id;

UPDATE `booking_clone`.`hotels` SET `user_id` = '5' WHERE (`id` = '2');

-- Insert rooms for Deluxe Room types
INSERT INTO rooms (hotel_id, room_type, price, is_occupied) VALUES
(2, (SELECT id FROM room_types WHERE name = 'Deluxe Room - Bed and Breakfast'), 150.00, FALSE),
(2, (SELECT id FROM room_types WHERE name = 'Deluxe Room - Bed and Breakfast'), 150.00, TRUE),
(2, (SELECT id FROM room_types WHERE name = 'Deluxe Room - Half Board'), 200.00, FALSE),
(2, (SELECT id FROM room_types WHERE name = 'Deluxe Room - Full Board'), 250.00, FALSE),
(2, (SELECT id FROM room_types WHERE name = 'Deluxe Room - All Inclusive'), 300.00, FALSE),
(2, (SELECT id FROM room_types WHERE name = 'Deluxe Room - Room Only'), 100.00, TRUE);

-- Insert rooms for Superior Room types
INSERT INTO rooms (hotel_id, room_type, price, is_occupied) VALUES
(2, (SELECT id FROM room_types WHERE name = 'Superior Room - Bed and Breakfast'), 120.00, FALSE),
(2, (SELECT id FROM room_types WHERE name = 'Superior Room - Half Board'), 160.00, FALSE),
(2, (SELECT id FROM room_types WHERE name = 'Superior Room - Full Board'), 200.00, TRUE),
(2, (SELECT id FROM room_types WHERE name = 'Superior Room - All Inclusive'), 240.00, FALSE),
(2, (SELECT id FROM room_types WHERE name = 'Superior Room - Room Only'), 90.00, TRUE);

-- Insert rooms for Standard Room types
INSERT INTO rooms (hotel_id, room_type, price, is_occupied) VALUES
(2, (SELECT id FROM room_types WHERE name = 'Standard Room - Bed and Breakfast'), 90.00, FALSE),
(2, (SELECT id FROM room_types WHERE name = 'Standard Room - Half Board'), 130.00, FALSE),
(2, (SELECT id FROM room_types WHERE name = 'Standard Room - Full Board'), 170.00, TRUE),
(2, (SELECT id FROM room_types WHERE name = 'Standard Room - All Inclusive'), 210.00, FALSE),
(2, (SELECT id FROM room_types WHERE name = 'Standard Room - Room Only'), 70.00, TRUE);

-- Insert amenities for hotel_id 1
INSERT INTO hotel_amenities_usage (hotel_id, amenity_id) VALUES
(2, (SELECT id FROM hotel_amenities WHERE name = 'Swimming Pool')),
(2, (SELECT id FROM hotel_amenities WHERE name = 'Restaurant')),
(2, (SELECT id FROM hotel_amenities WHERE name = 'Spa'));
