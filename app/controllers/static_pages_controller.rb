class StaticPagesController < ApplicationController
    #i assume this connects to the root view, 
    #and eventually the root being called in ReactDom.render 
    #in the frontend entry file

    def root; end
end
