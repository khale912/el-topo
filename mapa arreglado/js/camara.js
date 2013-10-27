// JavaScript Document

  function takePhoto() {
<<<<<<< HEAD
	  onCameraSuccess("images/test.jpeg")
=======
    // Este es para probar en local
    //onCameraSuccess("images/test.jpeg");
>>>>>>> dae27b740a59fb997cdf4f920e0d53f47a20ac8f
    navigator.camera.getPicture(onCameraSuccess, onCameraError, {
      quality: 10,
      destinationType: Camera.DestinationType.FILE_URI
    })
  }

  function onCameraSuccess(imageURI) {
    console.log(imageURI)
    ic = document.getElementById('image')
    ic.src = imageURI

    var divBtnGoToForm = document.getElementById('btnGoToForm')
    divBtnGoToForm.innerHTML =  '<a href="#form" id="goToFormBtn" data-role="button" >Lista la foto</a>'
    $('#goToFormBtn').button().button('refresh')

    document.getElementById('photoBtn').value = 'Retomar foto'
    $('#photoBtn').button().button('refresh')
  }

  function checkImgData(){
    var c = document.getElementById('canvas')
    c.height = ic.naturalHeight
    c.width = ic.naturalWidth
    var ctx = c.getContext('2d')
    ctx.drawImage(ic, 0, 0)
    imageData = c.toDataURL()

    console.log(imageData)
  }

  function onCameraError(e) {
    console.log(e)
    navigator.notification.alert('onCameraError: ' + e)
  }