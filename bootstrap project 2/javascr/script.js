var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
          return new bootstrap.Tooltip(tooltipTriggerEl)
        })
        function copyToClipboard(id) {
            var from = document.getElementById(id);
            var range = document.createRange();
            window.getSelection().removeAllRanges();
            range.selectNode(from);
            window.getSelection().addRange(range);
            document.execCommand('copy');
            window.getSelection().removeAllRanges();
            window.alert("تم نسخ النص.");
     }