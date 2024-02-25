<?php
$servername = "login-data";
$username = "rot";
$password = "christian";
$dbname = "login-data";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the data from the form
$nume = $_POST['nume'];
$cnp = $_POST['cnp'];

// Check if the data already exists in the table
$sql = "SELECT * FROM your_table WHERE nume = '$nume' AND CNP = '$cnp'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "The data already exists in the table.";
} else {
    // Insert the data into the table
    $sql = "INSERT INTO your_table (nume, CNP) VALUES ('$nume', '$cnp')";

    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Close the connection
$conn->close();
?>
