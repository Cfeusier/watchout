var Enemy = function(id, width, height) {
  this.id = id;
  this.x = Math.random() * width;
  this.y = Math.random() * height;
};

Enemy.prototype = {
  constructor: Enemy,
  imageRef: {
    path: 'M10.5867347,20.7653061 C9.51530612,18.1887755 8.59693878,16.4030612 8.29081633,16.1989796 C8.01020408,16.0204082 6.02040816,15.1530612 3.90306122,14.2602041 C1.76020408,13.3673469 0,12.5765306 0,12.5 C0,12.4234694 1.8622449,11.5816327 4.13265306,10.6122449 C6.42857143,9.64285714 8.41836735,8.7244898 8.57142857,8.57142857 C8.7244898,8.41836735 9.64285714,6.42857143 10.6122449,4.15816327 C11.5816327,1.8622449 12.4234694,0 12.5,0 C12.5765306,0 13.4183673,1.8622449 14.3877551,4.13265306 C15.3571429,6.42857143 16.2755102,8.41836735 16.4285714,8.57142857 C16.5816327,8.7244898 18.5714286,9.64285714 20.8673469,10.6122449 C23.1377551,11.5816327 25,12.4234694 25,12.5 C25,12.5765306 23.2397959,13.3673469 21.0969388,14.2602041 C18.9795918,15.1530612 16.9897959,16.0204082 16.7091837,16.1989796 C16.4030612,16.4030612 15.4846939,18.1887755 14.4132653,20.7653061 C13.4438776,23.0867347 12.5765306,25 12.5,25 C12.4234694,25 11.5816327,23.0867347 10.5867347,20.7653061 L10.5867347,20.7653061 Z M14.3622449,14.005102 C15.0255102,13.1887755 14.9234694,11.6071429 14.1581633,10.8418367 C13.2908163,9.94897959 11.7091837,9.94897959 10.8418367,10.8418367 C10.1530612,11.505102 9.9744898,12.8826531 10.4846939,13.8010204 C11.1479592,15.0765306 13.3928571,15.1785714 14.3622449,14.005102 L14.3622449,14.005102 Z',
    fill: '#E27A3F'
  }
};