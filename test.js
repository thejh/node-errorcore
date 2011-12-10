function f() {
  var f_loc = "FLOC"
  var f_nonloc = "FNLOC"
  
  function a() {
    var a_loc = "ALOC"
    f_nonloc()
  }
  
  function b() {
    var b_loc = "BLOC"
    a()
  }
  return b
}

setTimeout(function() {
  try {
    f()()
  } catch (e) {
    //console.log('error with '+Object.keys(e).join())
    if (e.btbody) {
      console.log(JSON.stringify(e.btbody))
    }
  }
}, 10000)
