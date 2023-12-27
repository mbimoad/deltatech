<link rel="stylesheet" href="assets/magnifier.css">

<div class="management-menu">
    <a href="#">BOARD OF COMISSIONERS</a>
    <span>|</span>
    <a class="active" href="#">BOARD OF DIRECTORS</a>
    <span>|</span>
    <a href="#">CORPORATE SECRETARY</a>
</div>



<div class="structure">
    <a class="magnifier-thumb-wrapper">
        <img id="thumb" src="company/image/organizational.png">
    </a>
    <div class="magnifier-preview" id="preview"></div>
</div>

<script src="assets/Event.js"></script>
<script src="assets/Magnifier.js"></script>
<script>
    var evt = new Event(),
    m = new Magnifier(evt);

    m.attach({
        thumb: '#thumb',
        large: 'company/image/organizational.png',
        largeWrapper: 'preview',
        zoom: 5,
    });
</script>