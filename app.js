const express = require("express")
const res = require("express/lib/response")
const {mode, median, mean, verifyNum, err} = require("./helper")

const app = express()

app.get("/mean", (req, res) =>{
  const nums = req.query.nums.split(",")
  if(nums[0]=='') return res.send(err("nums can't be empty"))
  const trueNums = verifyNum(nums)
  let result = null
  if (Array.isArray(trueNums)){
    result = mean(trueNums) 
  }else{
    return res.send(trueNums)
  }
  const response = {
    operation: "mean",
    value: result  
  }
  return res.send(response)
})


app.get("/median", (req, res) => {
  let nums = req.query.nums.split(",");
  if(nums[0]=='') return res.send(err("nums can't be empty"))
  const trueNums = verifyNum(nums);
  let result = null;
  if (Array.isArray(trueNums)){
    result = median(trueNums)
  }else{
    return res.send(trueNums)
  }
  const response = {
    operation: "median",
    value: result
  }
  return res.send(response)
})

app.get("/mode", (req, res) =>{
  const nums = req.query.nums.split(",")
  if(nums[0]=='') return res.send(err("nums can't be empty"))
  const trueNums = verifyNum(nums);
  let result = null
  if (Array.isArray(trueNums)){
    result = mode(trueNums)
  }else{
    return res.send(trueNums)
  }
  const response = {
    operation: "mode",
    value: result
  }
  return res.send(response)
})



// app.get("/", (req, res) =>{
//   const rep = req.query.search.split(",")
//   console.log(rep)
//   res.send(`You entered ${req.query.search.split(" ")} for QUERY`)
// })


app.listen(3000, () => {
  console.log("App  running on port 3000")
})