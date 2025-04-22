SELECT
    email,
    COUNT(*) AS num_occurrences
FROM
    users
GROUP BY
    email
HAVING
    COUNT(*) > 1;