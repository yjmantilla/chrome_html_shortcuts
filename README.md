Simple chrome extension that saves the current active tab as an html shorcut.

That is, it just saves an html file with the following info:

```html
<html>
<head>
<meta http-equiv="refresh" content="0; url=%CURRENT_TAB_URL% />
</head>
<body>
</body>
</html>
```
