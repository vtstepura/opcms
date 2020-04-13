class ClientSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :project, :department, :estimate, :budget, :start_date, :color

  attributes :last_history do |object|
    object.history.last
  end

  attributes :maneger_name do |object|
    object.history.last.maneger.name if object.history.present?
  end
end
