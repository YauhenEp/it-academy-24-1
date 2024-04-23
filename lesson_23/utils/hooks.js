const {After , Before} = require('@wdio/cucumber-framework');

Before(async () => {
  console.log('BEFORE EVERY TEST')
})

Before('@smoke',async () => {
  console.log('BEFORE @smoke TEST')
})

After(async () => {
  console.log('After EVERY TEST')
})

After('@smoke',async () => {
  console.log('After @smoke TEST')
})
