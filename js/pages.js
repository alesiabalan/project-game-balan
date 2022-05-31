const header = {
    render() {
        return `
        <header class="header">
            <h1 class="title">Flappy Plane<h1>
           
        </header>
        `;
    }
};
const menu = {
    render() {
        return `
        <div class="menu">
            <div class="menu_list">
                <input type="button" value="Play" class="menu_list_button" id="play">
                <input type="button" value="Rules" class="menu_list_button" id="rules"> 
            </div>
        </div>
        `;
    }
};
const rules = {
    render() {
        return `
        <div class="rules">
            <h2 class="title_rules">Rules:</h2>
                <div class="rules_content">
                    <p>
                    You need to control the plane by pressing the space bar. 
                    The aircraft must not crash into obstacles. If the obstacles 
                    could not be avoided, the game is over. The number of obstacles 
                    passed is the number of points you have.
                    </p>  
                </div>      
        </div>
        `;
    }
};
const game = {
    render() {
        return `
        <div class="top">
            <div class="button_home" id="button_home"><a href="#"></a></div>
        </div>
        <canvas id="canvas"></canvas>
        `;
    }
};