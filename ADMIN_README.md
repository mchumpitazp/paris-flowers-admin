# Paris Flowers Admin Panel

A comprehensive admin panel built with Next.js 15, TypeScript, ShadCN UI, React Hook Form, and Zod validation.

✅ **UPDATED**: Now uses direct Prisma types, camelCase file naming, root-level routes (no `/admin` prefix), and improved sidebar layout.

## 🚀 Features

- **Modern Admin Layout**: Sidebar navigation with breadcrumbs using ShadCN UI components
- **Product Management**: Complete CRUD operations for flower products  
- **Image Management**: Upload and manage multiple product images with primary image selection
- **Form Validation**: Client and server-side validation using Zod schemas
- **TypeScript**: Full type safety with direct Prisma types
- **Authentication**: NextAuth v5 with credentials provider for single admin user
- **Responsive Design**: Mobile-first responsive design with Tailwind CSS
- **Clean Architecture**: Feature-first folder structure with camelCase naming
- **Route Protection**: Middleware-based route protection for all admin pages

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx                 # Dashboard (root route)
│   ├── layout.tsx               # Root layout with AdminLayout wrapper
│   ├── products/                # Product management (root level)
│   │   ├── page.tsx            # Product listing
│   │   ├── types.ts            # TypeScript types using Prisma types
│   │   ├── new/            
│   │   │   └── page.tsx        # Create new product
│   │   └── [id]/
│   │       └── edit/
│   │           ├── page.tsx    # Edit product page
│   │           └── ProductEditForm.tsx # Edit form component (camelCase)
│   ├── api/
│   │   └── products/
│   │       └── [id]/
│   │           └── route.ts    # API endpoints for product CRUD
│   └── globals.css             # Global styles
├── components/
│   ├── AdminLayout.tsx         # Main admin layout component (camelCase)
│   ├── AppSidebar.tsx          # Sidebar navigation with sign out
│   ├── ProtectedLayout.tsx     # Wrapper for authenticated routes
│   ├── SessionProvider.tsx     # NextAuth session provider
│   └── ui/                     # ShadCN UI components
├── lib/
│   ├── prisma/
│   │   └── client/             # Generated Prisma client
│   └── utils.ts                # Utility functions
├── middleware.ts               # Route protection middleware
├── auth.config.ts             # NextAuth configuration
└── auth.ts                    # NextAuth instance
```

## 🛠️ Setup Instructions

### 1. Install Dependencies

Install NextAuth v5 and any missing ShadCN components:

```bash
npm install next-auth@beta
npx shadcn add label sonner
```

### 2. Environment Setup

Create a `.env` file with the required environment variables:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/paris_flowers"

# NextAuth Configuration
AUTH_SECRET="your-secret-key-here" # Generate with: openssl rand -base64 32
ADMIN_USERNAME="admin"
ADMIN_PASSWORD="your-admin-password-here"
```

### 3. Database Setup

Generate and apply the Prisma client:

```bash
npx prisma generate
npx prisma db push
```

### 4. Start the Development Server

```bash
npm run dev
```

### 5. Login to Admin Panel

- Navigate to `/login` (or root `/` - will redirect to login if not authenticated)
- Use the credentials from your `.env` file:
  - Username: value of `ADMIN_USERNAME`
  - Password: value of `ADMIN_PASSWORD`

## 📚 Usage Guide

### Admin Dashboard
- Access at `/` (root route since this is admin.yourdomain.com)
- Overview cards showing total products, orders, revenue, and customers
- Navigation sidebar with collapsible design

### Product Management

#### Product Listing (`/products`)
- View all products in a table format
- Display product images, names, categories, prices, and occasions
- Click "Edit" to modify any product
- Click "Add Product" to create new products

#### Product Creation (`/products/new`)
- Automatically creates a new product and redirects to edit page
- Sets default name as "New Product"

#### Product Editing (`/products/[id]/edit`)
- **Basic Information**: Name, description, price, expiry date
- **Classification**: Category, occasion, dimensions (width/height)
- **Image Management**: Add/remove product images with primary selection

#### Form Fields

| Field | Type | Description |
|-------|------|-------------|
| Name | Text | Product name (required) |
| Description (Russian) | Textarea | Product description in Russian |
| Price | Number | Price in cents (e.g., 2999 for €29.99) |
| Category | Select | Bouquet, Arrangement, Plant, Gift |
| Occasion | Select | Birthday, Anniversary, Wedding, etc. |
| Width/Height | Number | Dimensions in centimeters |
| Status | JSON | Product status metadata |
| Image | JSON | Image metadata |
| Items | JSON | Product items/components |
| Expiry Date | Date | Product expiration date |

#### Image Management
- Add multiple images per product
- Set one image as primary (for listing display)
- Define display order for image gallery
- Real-time URL validation
- Visual preview of images

## 🔧 API Endpoints

### Products API (`/api/products/[id]`)

#### GET `/api/products/[id]`
Fetch a single product with images.

#### PUT `/api/products/[id]`
Update a product and its images.

**Request Body:**
```json
{
  "name": "Beautiful Rose Bouquet",
  "descriptionRu": "Красивый букет роз",
  "price": 2999,
  "category": "bouquet",
  "occasion": "birthday",
  "status": "{\"available\": true}",
  "product_images": [
    {
      "image_url": "https://example.com/image.jpg",
      "is_primary": true,
      "display_order": 0
    }
  ]
}
```

#### DELETE `/api/products/[id]`
Delete a product and all associated images.

## 🎨 UI Components Used

- **Layout**: Sidebar, Breadcrumb, Separator
- **Forms**: Input, Textarea, Select, Checkbox, Button, Form components
- **Data Display**: Table, Card, Badge
- **Navigation**: SidebarProvider, SidebarTrigger
- **Icons**: Lucide React icons

## 🔒 Features & Best Practices

### Type Safety
- Full TypeScript coverage
- Prisma-generated types
- Zod schema validation
- Type-safe API routes

### Form Handling 
- React Hook Form for performance
- Zod resolver for validation
- Field arrays for dynamic images
- Client-side validation with server backup

### Database Operations
- Prisma transactions for data consistency
- Proper error handling
- Cascade delete for related images
- Optimized queries with includes

### UI/UX Features
- Responsive design (mobile-first)
- Loading states
- Error messages
- Form validation feedback
- Collapsible sidebar
- Breadcrumb navigation

## 🐛 Known Issues & Solutions

### TypeScript Warnings
Some TypeScript warnings exist due to complex form typing with Zod transformations. The application functions correctly despite these warnings.

### Image Validation
Images are validated by URL format but not by actual image accessibility. Consider adding image loading validation in production.

### JSON Fields
JSON fields (status, image, items) require manual JSON formatting. Consider adding a JSON editor component for better UX.

## 🚀 Production Considerations

1. **Environment Variables**: Set up proper environment variables for production
2. **Image Hosting**: Implement proper image upload and hosting (e.g., Cloudinary, AWS S3)
3. **Authentication**: Add admin authentication and role-based access
4. **Error Logging**: Implement proper error logging and monitoring
5. **Performance**: Add image optimization and lazy loading
6. **Backup**: Set up database backups and recovery procedures

## 📝 Next Steps

1. Add product creation form (currently auto-creates then redirects to edit)
2. Implement image upload functionality
3. Add bulk operations (delete multiple products)
4. Create order management system
5. Add analytics and reporting
6. Implement user authentication
7. Add product search and filtering

## 🤝 Contributing

The codebase follows these conventions:
- Feature-first folder structure
- TypeScript strict mode
- ESLint configuration
- Tailwind CSS for styling
- Prisma for database operations

Remember to run `npm run lint` and `npm run type-check` before committing changes. 