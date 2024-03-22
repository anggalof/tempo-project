<script lang="ts" setup>
import { formatDate } from "~/utils/formatter/dateTime";
import { formatNumber } from "~/utils/formatter/formatNumber";

const props = defineProps<{
  author: string;
  rating: any;
  date: any;
  content: string;
}>();
</script>
<template>
  <div class="card-review">
    <div class="review-header">
      <div class="review-profile">
        <img
          src="~/assets/img/gaga-adi.jpeg"
          alt="review"
        />
        <div class="review-info">
          <div class="review-name">{{ props.author }}</div>
          <div class="review-date">{{ formatDate(props.date) }}</div>
        </div>
      </div>
      <div class="review-rate">
        <img
          src="~assets/img/star.svg"
          alt="star"
        />
        <div class="review-rate__value">{{ formatNumber(props.rating) }}</div>
      </div>
    </div>
    <div class="review-content">
      {{ content }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-review {
  width: 50%;
  padding: 2rem;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  background-color: #f9f9f9;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  &:first-of-type {
    margin-right: 1rem;
  }

  .review-header {
    display: flex;
    justify-content: space-between;

    .review-profile {
      display: flex;
      align-items: center;

      img {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        margin-right: 0.5rem;
      }

      .review-info {
        .review-name {
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
        }

        .review-date {
          font-size: 12px;
          font-weight: 400;
          color: #666666;
        }
      }
    }

    .review-rate {
      display: flex;
      background-color: #eaeaea;
      padding: 0 0.5rem;
      border-radius: 0.5rem;

      @media (max-width: 768px) {
        height: 2rem;
      }

      img {
        width: 17px;
        height: 17px;
        margin-top: 10px;
        margin-right: 5px;

        @media (max-width: 768px) {
          width: 10px;
          height: 10px;
          margin-top: 5px;
        }
      }

      .review-rate__value {
        font-size: 36px;
        font-weight: 600;

        @media (max-width: 768px) {
          font-size: 14px;
        }
      }
    }
  }

  .review-content {
    margin-top: 15px;
    font-style: italic;
    font-size: 13px;
    font-weight: 400;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 7;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
  }
}
</style>
