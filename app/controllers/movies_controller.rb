class MoviesController < ApplicationController
  def index
    render component: 'index'
  end
end
