<?php

require_once __DIR__. '/../vendor/autoload.php';

const isProduction = false;

$manifest = new \mindplay\vite\Manifest(
	!isProduction,
	__DIR__ . '/dynamic/.vite/manifest.json',
	(isProduction ? '' : 'http://localhost:5173') . '/dynamic/'
);

$tags = $manifest->createTags('modules/main.js')
?>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<title>Backend Home</title>

	<?=$tags->preload?>
	<?=$tags->css?>
</head>
<body>
<h1>
	Backend Home
</h1>

<?=$tags->js?>
</body>
</html>