class Api::V1::ContactsController < ApplicationController
  def index
    render json: Contact.all
  end

  def create
    contact = Contact.new contact_params

    contact.save
    respond json: contact
  end

  def update
    contact = Contact.find params[:id]
    contact.update_attributes(contact_params)
    respond json: contact
  end

  def destroy
    contact = Contact.find(params[:id])
    contact.destroy
    respond head: :no_content
  end

  def show
    render json: Contact.find(params[:id])
  end

private

  def contact_params
    params.require(:contact).permit!
  end
end
