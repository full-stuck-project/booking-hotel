const { promisePool } = require("../db/dbPool");

const hotelController = {
  getAllHotels: async (req, res) => {
    try {
      const [rows] = await promisePool.query(`
        SELECT h.id AS hotel_id, 
               h.name AS hotel_name, 
               h.rating, 
               h.city_center, 
               c.name AS city, 
               GROUP_CONCAT(DISTINCT ha.name) AS hotel_amenities,
               GROUP_CONCAT(DISTINCT ra.name) AS room_amenities,
               MIN(r.price) AS min_price
        FROM hotels h
        LEFT JOIN cities c ON h.city_id = c.id
        LEFT JOIN hotel_amenities_usage hau ON h.id = hau.hotel_id
        LEFT JOIN hotel_amenities ha ON hau.amenity_id = ha.id
        LEFT JOIN rooms r ON h.id = r.hotel_id
        LEFT JOIN room_types rt ON r.room_type = rt.id
        LEFT JOIN room_amenities_usage rau ON rt.id = rau.room_type_id
        LEFT JOIN room_amenities ra ON rau.amenity_id = ra.id
        GROUP BY h.id, h.name, h.rating, h.city_center, c.name
      `);
      res.json(rows);
    } catch (err) {
      console.error("Error fetching hotels:", err.stack);
      res.status(500).send("Internal Server Error");
    }
  },
};

module.exports = { hotelController };
