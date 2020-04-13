# frozen_string_literal: true

class JsonWebToken
  SECRET_KEY = Rails.application.credentials.secret_key_base

  def self.encode(payload)
    JWT.encode(payload, ENV["JWT_SECRET"])
  end

  def self.decode(token)
    decoded = JWT.decode(token, ENV["JWT_SECRET"])[0]
    HashWithIndifferentAccess.new decoded
  end
end
