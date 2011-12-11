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
  f()()
}, 10000)
