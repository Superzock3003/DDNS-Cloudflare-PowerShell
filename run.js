var wshShell = new ActiveXObject("WScript.Shell");
wshShell.Run('powershell.exe -ExecutionPolicy Bypass -File REPLACE\\WITH\\YOUR\\PATH\\update-cloudflare-dns.ps1', 0, false);