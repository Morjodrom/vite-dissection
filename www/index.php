<?php
$isProduction = true;

if($isProduction){
	$manifest = json_decode(file_get_contents(__DIR__ . '/dynamic/.vite/manifest.json'), true);
	$entryPoint = $manifest['modules/main.js'];
	$css = $entryPoint['css'];
} else {
	$entryPoint = [];
	$css = [];
}
?>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<title>Backend Home</title>

	<?php foreach($css as $href){?>
		<link rel="stylesheet" href="/dynamic/<?=$href?>">
	<?php }?>
</head>
<body>
<h1>
	Backend Home
</h1>


<?php if(!$isProduction){?>
<script type="module" src="http://localhost:5173/@vite/client"></script>
<script type="module" src="http://localhost:5173/modules/main.ts"></script>
<?php }?>

<?php
if(isset($entryPoint['file'])){?>
	<script type="module" src="/dynamic/<?=$entryPoint['file']?>"></script>
<?php }?>
</body>
</html>