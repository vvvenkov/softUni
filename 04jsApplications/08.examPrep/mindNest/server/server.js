3.9 Analyze Offers per Estate
---------------------------------------------------

SELECT
    e.id AS estate_id,
    e.initial_price,
    ROUND(COALESCE(AVG(o.offer_price), 0) ,2) AS avg_offer_price,
    ROUND(COALESCE(AVG(o.offer_price), 0) - e.initial_price, 2) AS difference,
    COUNT(o.id) AS offer_count 
FROM estates AS e 
LEFT JOIN offers AS o
    ON e.id = o.estate_id
GROUP BY
    e.id, e.initial_price
ORDER BY 
    difference DESC,
    e.id ASC; 

--------------------------------------------------
4.10
Estates by City and Type
----------------------------------------------------
CREATE OR REPLACE FUNCTION udf_estates_count(
    city_name VARCHAR(60),
    estate_type_name VARCHAR(40)
)
RETURNS TEXT AS 
$$
DECLARE
    estate_count INT;
BEGIN
    SELECT COUNT(*)
    INTO estate_count 
    FROM estates e
    JOIN cities c ON e.city_id = c.id
    JOIN estate_types et ON e.estate_type_id = et.id
    WHERE c.name = city_name
      AND et.type = estate_type_name;

    IF estate_count > 0 THEN
	RETURN 'Found' || estate_count || ' estates.';
    ELSE 
	RETURN 'No estates found.';
    END IF;
END;
$$
LANGUAGE plpgsql;








-----------------------------------------
DELIMITER $$

CREATE PROCEDURE udp_adjust_estate_prices(IN city_name VARCHAR(60))
BEGIN
    UPDATE estates e
    JOIN cities c ON e.city_id = c.id
    LEFT JOIN offers o
	ON o.estate_id = e.id
       AND o.price > e.price
    SET e.price = ROUND(e.price * 0.8, 2)
    WHERE c.name = city_name
    AND o.id IS NULL;
END$$
DELIMITER ;


