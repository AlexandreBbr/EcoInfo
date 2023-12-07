  <template>
    <div id="background" :class="{ 'night-mode': isNightMode }"></div>
    <div class="switch-container">
      <label class="switch">
        <input type="checkbox" v-model="isNightMode" />
        <span class="slider"></span>
      </label>
    </div>
  </template>

  <script>
  export default {
    data() {
      return {
        isNightMode: false,
      };
    },
  };
  </script>

  <style>
  body {
    margin: 0px;
    background-image: url("@/assets/nightLandscape.jpg");
    background-size: cover;
    background-repeat: no-repeat;
  }
  #background {
    background-image: url("@/assets/dayLandscape.jpg");
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    background-repeat: no-repeat;
    transition: opacity 1.25s ease;
  }
  
  #background.night-mode {
    opacity: 0;
  }

  .switch-container {
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
  }

  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #9de1f7;
    border-radius: 34px;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-image: url("@/assets/sun.png");
    background-size: cover;
    border-radius: 50%;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #27536b;
  }

  input:checked + .slider:before {
    transform: translateX(26px);
    background-image: url("@/assets/half-moon.png");
    background-size: cover;
  }
  </style>

