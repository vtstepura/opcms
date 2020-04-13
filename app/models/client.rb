class Client < ApplicationRecord
   validates :name, :project, presence: true

   has_many :history
end
