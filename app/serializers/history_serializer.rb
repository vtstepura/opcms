class HistorySerializer
  include FastJsonapi::ObjectSerializer
  attributes :date, :action

  attributes :maneger do |object|
    object.maneger.name
  end
end
