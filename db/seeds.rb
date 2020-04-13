maneger = Maneger.create(
  name: 'Eugene',
  email: 'eugene@example.com',
  password: '11111111',
  password_confirmation: '12jktuhjnnt'
)

client = Client.create(
  name: 'Test',
  project: Faker::Company.name,
  department: Faker::Company.name,
  estimate: Faker::Number.number(digits: 4),
  budget: Faker::Number.number(digits: 4),
  start_date: Faker::Date.between(from: 2.days.ago, to: Date.today)
)

59.times do
  Client.create(
    name: Faker::Name.name,
    project: Faker::Company.name,
    department: Faker::Company.name,
    estimate: Faker::Number.number(digits: 4),
    budget: Faker::Number.number(digits: 4),
    start_date: Faker::Date.between(from: 2.days.ago, to: Date.today)
  )
end
30.times do
  History.create(
    date: Faker::Date.between(from: 2.days.ago, to: Date.today),
    maneger_id: maneger.id,
    action: Faker::Company.name,
    client_id: client.id
  )
end
