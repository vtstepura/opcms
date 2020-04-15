class History < ApplicationRecord

  validates :date, :action, presence: true

  belongs_to :client
  belongs_to :maneger
end
