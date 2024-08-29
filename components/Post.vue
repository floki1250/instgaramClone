<template>
    <div class="max-w-md mx-auto mt-10 bg-white ">
        <!-- Post Header -->
        <div class="flex justify-between items-center py-3">
            <div class="flex">
                <img class="w-10 h-10 rounded-full" src="https://via.placeholder.com/40" alt="Profile Picture">
                <div class="ml-3">
                    <p class="font-semibold text-sm">Username</p>
                    <p class="text-xs text-gray-500">Location</p>
                </div>
                <div class="py-0.5 flex">
                    <UIcon name="i-ph-dot-outline-fill" />
                    <p class="text-xs text-gray-500">2 hours ago</p>
                </div>
            </div>

            <div>
                <button>
                    <UIcon name="i-ph-dots-three-outline-fill" />
                </button>
            </div>
        </div>

        <!-- Post Image -->
        <img class="w-full rounded-md" src="https://via.placeholder.com/400x400" alt="Post Image">

        <!-- Post Actions -->
        <div class="flex items-center py-2 space-x-4">
            <button>
                <UIcon name="i-ph-heart" class="w-6 h-6" />
            </button>
            <button>
                <UIcon name="i-ph-chat-circle" class="w-6 h-6" />

            </button>
            <button>
                <UIcon name="i-ph-paper-plane-tilt" class="w-6 h-6" />
            </button>
        </div>

        <!-- Post Likes and Comments -->
        <div>
            <p class="text-sm font-semibold">1,234 likes</p>
            <p class="text-sm"><span class="font-semibold">Username</span> Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.</p>
            <p class="text-xs text-gray-500">View all 56 comments</p>

        </div>
        <div class="flex items-center py-2 ">
            <input type="text" placeholder="Add a comment..." class="w-full text-sm focus:outline-none focus:ring-0">
            <button class="text-blue-500 font-semibold text-sm ml-2">Post</button>
        </div>
    </div>
</template>