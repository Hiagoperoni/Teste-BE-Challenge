SELECT 
    customers.name AS customer_name,
    SUM(orders.total) AS total_purchases
FROM 
    orders
INNER JOIN 
    customers
ON 
    orders.customer_id = customers.id
GROUP BY 
    customers.name
ORDER BY 
    total_purchases DESC;