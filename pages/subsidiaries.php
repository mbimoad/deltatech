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




<section class="toggle-boxs">
    <div class="toggle-box">
        <div class="toggle-header">
            <h3>Lorem, ipsum dolor.</h3>
            <i class="fas fa-chevron-right"></i>
        </div>
        <div class="toggle-description">
            <table>
                <tr>
                    <th>Name</th>
                    <th>Business Field</th>
                    <th>Shareholding (%)</th>
                </tr>
                <tr>
                    <td>PT Wijaya karma</td>
                    <td>Building construction services Company, property and property investment</td>
                    <td>69.30</td>
                </tr>
                <tr>
                    <td>PT Wijaya karma</td>
                    <td>Building construction services Company, property and property investment</td>
                    <td>69.30</td>
                </tr>
                <tr>
                    <td>PT Wijaya karma</td>
                    <td>Building construction services Company, property and property investment</td>
                    <td>69.30</td>
                </tr>
                <tr>
                    <td>PT Wijaya karma</td>
                    <td>Building construction services Company, property and property investment</td>
                    <td>69.30</td>
                </tr>
                <tr>
                    <td>PT Wijaya karma</td>
                    <td>Building construction services Company, property and property investment</td>
                    <td>69.30</td>
                </tr>
                <tr>
                    <td>PT Wijaya karma</td>
                    <td>Building construction services Company, property and property investment</td>
                    <td>69.30</td>
                </tr>
                <tr>
                    <td>PT Wijaya karma</td>
                    <td>Building construction services Company, property and property investment</td>
                    <td>69.30</td>
                </tr>
            </table>
        </div>
    </div>
    

</section>

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