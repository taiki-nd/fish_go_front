export class Post {
  constructor(
    public id = 0,
    public name = '',
    public content = '',
    public filename = '',
    public image_url = '',
    public updated_at = '',
  ){}
}