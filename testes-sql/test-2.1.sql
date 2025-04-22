SELECT
    product,
    SUM(quantity * price) AS total_revenue
FROM
    sales
GROUP BY
    product
ORDER BY
    total_revenue DESC;