<template>
  <div class="">
    <Header />
    <div
      class="flex flex-row gap-x-[32px] pt-[26px] shadow pb-[30px] px-[11px]"
    >
      <div class="basis-[75%]">
        <div class="flex gap-x-[30px]">
          <div class="basis-[40%]">
            <div>
              <TypePost
                image="/fashion1.jpg"
                type="Fashion"
                desc="The best smart glasses to buy now, according to experts asdasdasda"
              />
              <TypePost
                image="/fashion2.jpg"
                type="Fashion"
                desc="The best smart glasses to buy now, according to experts asdasdasda"
              />
              <TypePost
                image="/fashion3.jpg"
                type="Travel"
                desc="The best smart glasses to buy now, according to experts asdasdasda"
                :border="false"
              />
            </div>
          </div>
          <div class="basis-[60%]">
            <div>
              <img
                src="/imageContent1.jpg"
                alt=""
                class="object-cover max-h-[300px] w-full"
              />
              <h2 class="hover:text-blue-500 font-bold mt-[18px] text-[20px]">
                TikTok’s latest trending beauty filter returns users to their
                younger selves
              </h2>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-4 gap-x-[23px] mt-[20px] mb-[20px]">
          <TypePost
            image="/fashion4.jpg"
            type="Fashion"
            desc="The 23 best men’s shorts for the summer, according to style experts"
            :css-type="true"
            :css-desc="false"
            :size-image="true"
            :border="false"
          />
          <TypePost
            image="/fashion3.jpg"
            type="ADVERTISING"
            desc="Reddit communities go private to protest pricing plan for apps"
            :css-type="true"
            :css-desc="false"
            :size-image="true"
            :border="false"
          />
          <TypePost
            image="/fashion2.jpg"
            type="Fashion"
            desc="Adidas vs. Hoka: We put these favorite running shoes to the test"
            :css-type="true"
            :css-desc="false"
            :size-image="true"
            :border="false"
          />
          <TypePost
            image="/fashion1.jpg"
            type="SOCIAL MEDIA"
            desc="Georgia man sues Facebook over losing account access and wins"
            :css-type="true"
            :css-desc="false"
            :size-image="true"
            :border="false"
          />
        </div>
        <!-- BUSINESS -->
        <div class="mb-[55px]">
          <Business
            title="BUSINESS"
            :sections="[
              {
                image: '/business1.jpg',
                desc: 'The job market enters a new phase as the Great Resignation ends',
              },
              {
                image: '/business2.jpg',
                desc: 'Musk is no longer the CEO of Twitter. Linda Yaccarino officially starts in role',
              },
              {
                image: '/business3.jpg',
                desc: 'Deciding what to do when your employer changes the rules on remote work',
              },
            ]"
          />
        </div>
        <!-- TECHNOLOGY -->
        <div>
          <Technology />
        </div>
        <!-- LIFESTYLE -->
        <div class="mb-[50px]">
          <Business
            title="LIFESTYLE"
            :sections="[
              {
                image: '/LIFESTYLE1.jpg',
                desc: 'TikTok’s latest trending beauty filter returns users to their younger selves',
              },
              {
                image: '/LIFESTYLE2.jpg',
                desc: 'Gucci Visions: An exhibit that takes you on a futuristic journey into the past',
              },
              {
                image: '/LIFESTYLE3.jpg',
                desc: 'Omega says ex-employees responsible for $3 million fake Speedmaster watch',
              },
            ]"
          />
        </div>
        <!-- SOCIAL MEDIA -->
        <div class="mb-[50px]">
          <Business
            title="SOCIAL MEDIA"
            :sections="[
              {
                image: '/media1.jpg',
                desc: 'Georgia man sues Facebook over losing account access and wins',
              },
              {
                image: '/media2.jpg',
                desc: 'YouTube will stop removing false claims about 2020 election fraud',
              },
              {
                image: '/media3.jpg',
                desc: 'Some Twitter users say they’ve been locked out of their accounts locked',
              },
            ]"
          />
        </div>
      </div>
      <div class="basis-[25%] pt-[4px]">
        <FollowUs />
        <Blogging />
        <Advertising />
        <Fashion />
      </div>
    </div>
    <div class="grid grid-cols-3 gap-x-[30px] mb-[30px] px-[11px]">
      <TypeField
        image="/technology1.jpg"
        desc="SEO Copywriting: How to Write Content For People and Optimize For Google"
      />
      <TypeField
        image="/technology2.jpg"
        desc="I’ve Been Using Google’s New AI Search. Here’s What I’ve Learned"
      />
      <TypeField
        image="/technology3.jpg"
        desc="TikTok’s latest trending beauty filter returns users to their younger selves"
      />
    </div>
    <!-- TRAVEL -->
    <div class="px-[11px] mb-[50px]">
      <TypeBusiness
        title="TRAVEL"
        :sections="[
          {
            image: '/travel1.jpg',
            desc: 'World’s Best 25 Airlines for 2023 Revealed by Airline Ratings',
          },
          {
            image: '/travel2.jpg',
            desc: 'The Italian beaches putting a daily cap on visitors this summer',
          },
          {
            image: '/travel3.jpg',
            desc: 'Venice authorities discover why canal turned fluorescent green',
          },
          {
            image: '/travel4.jpg',
            desc: 'Manhattanhenge: Where to see New York City’s special sunset show',
          },
        ]"
      />
    </div>
    <!-- FOOD & DRINKS -->
    <div class="px-[11px] mb-[50px]">
      <TypeBusiness
        title="FOOD"
        :sections="[
          {
            image: '/food1.jpg',
            desc: 'The German couple who moved to Italy and opened a pizza restaurant',
          },
          {
            image: '/food2.jpg',
            desc: 'Tokyo ramen shop bans customers from using their phones while eating',
          },
          {
            image: '/food3.jpg',
            desc: 'Best rice dishes: 20 delicious specialties from around the worldn',
          },
          {
            image: '/food4.jpg',
            desc: 'This savory Mexican dish made with vanilla is a first for Eva Longoria',
          },
        ]"
      />
    </div>
    <Footer />
  </div>
</template>
