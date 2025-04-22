CREATE VIEW monthly_summary AS
SELECT 
    account_id,
    DATEPART(MONTH, transaction_date) AS transaction_month,
    SUM(amount) AS total_amount
FROM 
    transactions
GROUP BY 
    account_id, DATEPART(MONTH, transaction_date);


SELECT 
    account_id,
    transaction_month,
    total_amount
FROM 
    monthly_summary
WHERE 
    total_amount > 10000;